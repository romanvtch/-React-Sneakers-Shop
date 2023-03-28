import React from "react";
import Card from "../Components/Card/Card";
import AppContext from "../context"

function Favorites({ onAddToFavorite }) {

  const {favorites} = React.useContext(AppContext);


  return (
    <div className="content">
      <div className="titleAndSearch">
        <h1>Мої збережені</h1>
      </div>

      <div className="sneakers">
        {favorites.map((item, index) => (
          <Card
            key={index}
            // id={item.id}
            // title={item.title}
            // price={item.price}
            // imgUrl={item.imgUrl}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
