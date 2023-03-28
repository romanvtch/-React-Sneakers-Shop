import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

import AppContext from "../../context"

function Card({
  id,
  title,
  price,
  imgUrl,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);


  const onClickPlus = () => {
    onPlus({ title, imgUrl, price, id });
  };

  const onClickFavorite = () => {
    onFavorite({ title, imgUrl, price, id });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={30}
          width={150}
          height={193}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
         
        >
          <rect x="0" y="5" rx="10" ry="10" width="150" height="90" />
          <rect x="124" y="141" rx="0" ry="0" width="2" height="1" />
          <rect x="0" y="111" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="158" rx="3" ry="3" width="80" height="24" />
          <rect x="0" y="130" rx="3" ry="3" width="93" height="15" />
          <rect x="118" y="150" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              src={
                isFavorite ? "/img/heard-liked.svg" : "/img/heard-unliked.svg"
              }
              alt="unliked"
              onClick={onClickFavorite}
            />
          </div>
          <img className={styles.img} src={imgUrl} alt="goods" />
          <h5>{title}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.cardPriceBtn}>
              <span>Ціна:</span>
              <b>{price} грн.</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? "/img/btn-active.svg" : "/img/btn-notactive.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}
export default Card;
