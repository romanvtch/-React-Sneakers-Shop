import styles from "./Drawer.module.scss";

function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.closeCart}>
          <h2>Корзина</h2>
          <img
            height={14}
            className={styles.removeBtn}
            src="/img/close.png"
            alt="Remove"
            onClick={onClose}
          />
        </div>

        {items.length > 0 ? (
          <div className={styles.items}>
            {items.map((obj) => (
              
              <div key={obj.id} className={styles.cartItem}>
                <div
                  style={{ backgroundImage: `url(${obj.imgUrl})` }}
                  className={styles.cartItemImg}
                ></div>
          
                <div className={styles.infoText}>
                  <p>{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className={styles.removeBtn}
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <img src="/img/shoppingCartIsEmty.svg" alt="shcartEmp" />
            <h3>Кошик порожній.</h3>
            <p>Додайте хоча б одну пару кросівок, щоб зробити замовлення.</p>
            <button onClick={onClose}>
              Повернутись назад
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        )}

        {items.length > 0 ? (
          <div className={styles.cartTotalBlock}>
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
            <button className={styles.greenButton}>
              Оформити замовлення
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Drawer;
