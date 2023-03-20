function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1>Усі кросівки</h1>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardPriceBtn">
              <span>Ціна:</span>
              <b>12 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default App;
