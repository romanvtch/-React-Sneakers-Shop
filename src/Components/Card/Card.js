import React from 'react';
import styles from './Card.module.scss'

function Card({id,title ,price, imgUrl, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({title,imgUrl,price});
    setIsAdded(!isAdded);
  }

const onClickFavorite = () => {
  onFavorite({title,imgUrl,price,id});
  setIsFavorite(!isFavorite)
}

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite ? "/img/heard-liked.svg" : "/img/heard-unliked.svg"} alt="unliked" onClick={onClickFavorite}/>
      </div>
      <img className={styles.img} src={imgUrl} alt="goods"/>
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPriceBtn}>
          <span>Ціна:</span>
          <b>{price} грн.</b>
        </div>
        
          <img className={styles.plus}
           onClick={onClickPlus} 
          src={isAdded ? "/img/btn-active.svg" : "/img/btn-notactive.svg"} 
          alt="Plus" 
          />
      
      </div>
    </div>
  );
}
export default Card;
