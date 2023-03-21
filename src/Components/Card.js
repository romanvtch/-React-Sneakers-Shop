
function Card() {
 return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heard-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" />
      <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div className="cardPriceBtn">
          <span>Ціна:</span>
          <b>12 999 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
