import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card/Card";
import Drawer from "./Components/Drawer/Drawer";

function App() {
  const [items, setItems] = React.useState([]); //Товари
  const [cartItems, setCartItems] = React.useState([]); //Корзина
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect (()=> {
    fetch('https://641c8b3b1a68dc9e460c4cfd.mockapi.io/items')
    .then(res => {
      return res.json(); 
    })
    .then((json) =>{
      setItems(json)
    })
   },[]);
  
   const onAddToCart = (obj) => {
    setCartItems(prev =>[...prev , obj]);
   }
 

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="titleAndSearch">
          <h1>Всі товари</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickFavorite={() => console.log("добавили в закладки")}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
