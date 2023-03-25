import React from 'react';
import styles from './Card.module.scss'

function Card({id,title ,price, imgUrl, onClickFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title,imgUrl,price});
    setIsAdded(!isAdded);
  }

  // React.useEffect(()=>{
  //   console.log('зміни');
  // },[isAdded])

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heard-unliked.svg" alt="unliked" onClick={onClickFavorite}/>
      </div>
      <img width={133} height={112} src={imgUrl}/>
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
