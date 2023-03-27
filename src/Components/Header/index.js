import styles from './Header.module.scss'
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        </Link>
        <ul className={styles.headerRight}>
          <li onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="Кошик" />
            <span>1205 грн.</span>
          </li>
          <li>
         <Link to={'favorites'}>
         <img width={18} height={18} src="/img/heart.svg" alt="Вподобання" />
          </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="Користувач" />
          </li>
        </ul>
      </header>
  )
}
export default Header;