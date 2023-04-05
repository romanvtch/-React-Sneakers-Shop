import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";


export default function Header(props) {
  const { totalPrice } = useCart();
 
  return (
    <header>
     
    </header>
  );
}
