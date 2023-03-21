function Header() {
  return (
    <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
  )
}
export default Header;