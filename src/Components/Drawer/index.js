import styles from './Drawer.module.scss'

function Drawer(){
    return(
        <div style={{display:'none'}}  className={styles.overlay}>
        <div className={styles.drawer}>
        
          <div className={styles.items}>
            <div className={styles.closeCart}>
          <h2>Корзина</h2>
            <img height={14}
                className={styles.removeBtn}
                src="/img/close.png"
                alt="Remove"
              />
            </div>
            <div className={styles.cartItem}>
            <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className={styles.cartItemImg}>
              </div>

              <div className={styles.infoText}>
                <p>Чоловічі кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className={styles.cartItem}>
            <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className={styles.cartItemImg}>
              </div>

              <div className={styles.infoText}>
                <p>Чоловічі кросівки Nike Air Max 270</p>
                <b>12 999 грн.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

          </div>
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
        </div>
      </div>
    )
}
export default Drawer;