import styles from './Drawer.module.scss'

function Drawer({onClose , items=[]}){
    return(
        <div className={styles.overlay}>
        <div className={styles.drawer}>
        
          <div className={styles.items}>
            <div className={styles.closeCart}>
          <h2>Корзина</h2>
            <img height={14}
                className={styles.removeBtn}
                src="/img/close.png"
                alt="Remove"
                onClick={onClose}
              />
            </div>

            
            {items.map((obj) => (
              <div className={styles.cartItem}>
              <div
                  style={{ backgroundImage: `url(${obj.imgUrl})` }}
                  className={styles.cartItemImg}>
                </div>
  
                <div className={styles.infoText}>
                  <p>{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>
                <img
                  className={styles.removeBtn}
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}

           

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