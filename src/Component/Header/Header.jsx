import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";


export default function Header(props) {
  const { totalPrice } = useCart();
 
  return (
    <header>
      <Link to="/react-shop">
        <div className="headerLeft">
          <img src={process.env.PUBLIC_URL + '/img/header/logo.svg'} alt="logo" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
        <img className="cart" src={process.env.PUBLIC_URL + '/img/header/shoppingCard.svg'} alt="shoppingCard" />
          <span>{totalPrice} грн.</span>
        </li>
        <li>
          <Link to="favorites">
          <img src={process.env.PUBLIC_URL + '/img/header/favorites.svg'} alt="favorites" />
          </Link>
        </li>
        <li>
          <Link to="orders">
          <img src={process.env.PUBLIC_URL + '/img/header/user.svg'} alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
