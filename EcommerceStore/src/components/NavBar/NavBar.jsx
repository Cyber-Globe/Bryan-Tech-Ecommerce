import React from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./NavBar.css";

function NavBar() {
  const [menu, setMenu] = React.useState("shop");

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>TECH-SHOP</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          Shop {menu === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("phone")}>
          Phones {menu === "phone" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("laptop")}>
          Laptops {menu === "laptop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("gadget")}>
          Gadget {menu === "gadget" ? <hr /> : ""}
        </li>
      </ul>

      <div className="nav-login-cart">
        <button className="login-btn">Login</button>
        <img src={cart_icon} alt="cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default NavBar;
