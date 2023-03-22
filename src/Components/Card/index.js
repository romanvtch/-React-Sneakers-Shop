import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heard-unliked.png" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imgUrl} />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPriceBtn}>
          <span>Ціна:</span>
          <b>{props.price} грн.</b>
        </div>
        <button className={styles.button} onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
