function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">
        <div className="drawer">
        
          <div className="items">
            <div className="closeCart">
          <h2>Корзина</h2>
            <img height={14}
                className="removeBtn"
                src="/img/close.png"
                alt="Remove"
              />
            </div>
            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="infoText">
                <p>Чоловічі кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="infoText">
                <p>Чоловічі кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

          </div>
          <div className="cartTotal-block">
            <ul>
              <li>
                <span>Разом</span>
                <div></div>
                <b>22 197 грн. </b>
              </li>

              <li>
                <span>Податок 5%</span>
                <div></div>
                <b>1074 грн. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформити замовлення
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    )
}
export default Drawer;