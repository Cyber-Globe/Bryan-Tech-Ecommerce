import React from "react";
// import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./NavBar.css";

function NavBar() {
  const [menu, setMenu] = React.useState("shop");

  return (
    <>
      <div className="discription">
        <div></div>
        <div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span>Shop Now</span>
          </p>
        </div>
        <div>
          English <i class="fa fa-caret-down"></i>
        </div>
      </div>
      <div className="nav-bar">
        <div className="nav-logo">
          <p>Exclusive</p>
        </div>

        <ul className="nav-menu">
          <li onClick={() => setMenu("home")}>
            Home {menu === "home" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("contact")}>
            Contact {menu === "contact" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("about")}>
            About {menu === "about" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("signup")}>
            Signup {menu === "signup" ? <hr /> : ""}
          </li>
        </ul>
        <div className="nav-search-container">
          <div className="search-container">
            <input
              type="search"
              class="search-box"
              placeholder="What are you looking for?"
            ></input>
            <i class="fa fa-search"></i>
          </div>
          <i class="fa fa-heart"></i>
          <img src={cart_icon} alt="cart" />
        </div>

        {/* <div className="nav-login-cart">
        <button className="login-btn">Login</button>
        <img src={cart_icon} alt="cart" />
        <div className="nav-cart-count">0</div>
      </div> */}
      </div>
    </>
  );
}

export default NavBar;
