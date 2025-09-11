import React from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import cart_icon from "../assets/cart_icon.png";
import user from "../assets/user.png";
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
          English <i className="fa fa-caret-down"></i>
        </div>
      </div>
      <div className="nav-bar">
        <div className="nav-logo">
          <p>Exclusive</p>
        </div>

        <ul className="nav-menu">
          <li onClick={() => setMenu("home")}>
            <Link className="link" to="/">
              Home {menu === "home" ? <hr /> : ""}
            </Link>
          </li>
          <li onClick={() => setMenu("contact")}>
            <Link className="link" to="/contact">
              Contact {menu === "contact" ? <hr /> : ""}
            </Link>
          </li>
          <li onClick={() => setMenu("about")}>
            <Link className="link" to="/about">
              About {menu === "about" ? <hr /> : ""}
            </Link>
          </li>
          <li onClick={() => setMenu("signup")}>
            <Link className="link" to="/signup">
              Signup {menu === "signup" ? <hr /> : ""}
            </Link>
          </li>
        </ul>
        <div className="nav-search-container">
          <div className="search-container">
            <input
              type="search"
              className="search-box"
              placeholder="What are you looking for?"
            ></input>
            <i class="fa fa-search"></i>
          </div>

          <div className="nav-login-cart">
            <i class="fa fa-heart"></i>
            <Link className="link" to="/Cart">
              <img src={cart_icon} alt="cart" />
            </Link>

            <div className="nav-cart-count">0</div>
            <img src={user} alt="userIcon" className="user" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
