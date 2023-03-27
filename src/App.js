import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]); //Items{Goods}
  const [cartItems, setCartItems] = React.useState([]); //Cart
  const [favorites, setFavorites] = React.useState([]); //Favorite
  const [searchValue, setSearchValue] = React.useState(""); //Search
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true); //Loading Cart

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://641c8b3b1a68dc9e460c4cfd.mockapi.io/items"
      ); //Запрос товарів
      const cartResponse = await axios.get(
        "https://641c8b3b1a68dc9e460c4cfd.mockapi.io/cart"
      ); //Запрос корзини

      const favoritestResponse = await axios.get(
        "https://641c8b3b1a68dc9e460c4cfd.mockapi.io/favorites"
      ); //Запрос Вподабані

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritestResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://641c8b3b1a68dc9e460c4cfd.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://641c8b3b1a68dc9e460c4cfd.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://641c8b3b1a68dc9e460c4cfd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://641c8b3b1a68dc9e460c4cfd.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://641c8b3b1a68dc9e460c4cfd.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch {
      alert("Не вдалось добавити в збережені");
    }
  };
  //Search
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
