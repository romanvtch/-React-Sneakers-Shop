import React from "react";
import "./Card.scss";
import { AppContext } from "../../App";

export default function Card({
  id,
  title,
  image,
  price,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const { isItemAdded } = React.useContext(AppContext); //AddedItems(Drawer)
  const [isFavorite, setIsFavorite] = React.useState(favorited); //AddedItems(Favorites)
  const itemObj = { id, parentId: id, title, image, price}
  
  //ChangeStatus(Photo)
  const onClickPlus = () => {
    onPlus(itemObj); //AddToCartItems(Drawer)#2
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="card">
      {onFavorite && <img
        onClick={onClickFavorite}
        className="like"
        src={`${process.env.PUBLIC_URL}/img/card/${isFavorite ? 'Liked.svg' : 'unLiked.png'}`}
        alt="like"
      />}

      <img width="100%" src={image} alt="sneakers" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div>
          <span>Ціна:</span>
          <br />
          <b>{price} грн.</b>
        </div>
        {onPlus && <img
          onClick={onClickPlus}
          src={`${process.env.PUBLIC_URL}/img/card/${isItemAdded(id) ? 'Added.svg' : 'unAdded.svg'}`}
          alt="unAdded"
        />}
      </div>
    </div>
  );
}
