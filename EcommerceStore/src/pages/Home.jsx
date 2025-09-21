import React from "react";
import SellingProduct from "./SellingProducts";
import { Link } from "react-router-dom";
import iphone16 from "../components/assets/iphone16.png";
import iphone16Image from "../components/assets/iphoneimage.png";
import FlashSales from "./FlashSales";
import LeftArrow from "../components/assets/LeftArrow.png";
import RightArrow from "../components/assets/RightArrow.png";
import CellPhone from "../components/assets/Category-CellPhone.png";
import Computer from "../components/assets/Category-Computer.png";
import SmartWatch from "../components/assets/Category-SmartWatch.png";
import Camera from "../components/assets/Category-Camera.png";
import HeadPhones from "../components/assets/Category-Headphone.png";
import Gaming from "../components/assets/Category-Gamepad.png";
import JBL_BOX from "../components/assets/JBL_BOOMBOX_2_HERO_020_x1.png";
import AppProducts from "./AllProducts";
import "./CSS/Home.css";
import NewArrivals from "./NewArrivals";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-side-menu">
          <p>
            <Link to="/products/womens">
              Women's Fashion <i class="fa fa-arrow-right"></i>
            </Link>
          </p>

          <p>
            <Link to="/products/mens">
              Men Fashion <i class="fa fa-arrow-right"></i>
            </Link>
          </p>

          <p>
            <Link to="/products/electronics">Electronics</Link>
          </p>
          <p>
            <Link to="/products/lifestyle">Home & Lifestyle</Link>
          </p>
          <p>
            <Link to="/products/medicine">Medicine</Link>
          </p>
          <p>
            <Link to="/products/men-fashion">Sports & Outdoor</Link>
          </p>
          <p>
            <Link to="/products/toyes">Baby’s & Toys</Link>
          </p>
          <p>
            <Link to="/products/groceries">Groceries & Pets</Link>
          </p>
          <p>
            <Link to="/products/health">Health & Beauty</Link>
          </p>
        </div>
        <div className="home-main">
          <div className="home-main-top">
            <span className="span-image">
              <img src={iphone16Image} alt="" />
              <p>iPhone 14 Series</p>
            </span>

            <h1>
              Up to 10%
              <br /> off Voucher
            </h1>
            <p>
              Shop Now <i class="fa fa-arrow-right"></i>
            </p>
          </div>
          <div className="home-main-bottom">
            <img src={iphone16} alt="" />
          </div>
        </div>
      </div>
      <FlashSales />
      <div className="cat-section">
        <div className="category-header">
          <h3>Browse By Category</h3>
          <div className="arrow">
            <span>
              <img src={LeftArrow} alt="left-arrow-sign" />
            </span>
            <span>
              <img src={RightArrow} alt="right-arrow-sign" />
            </span>
          </div>
        </div>
        <div className="category-items">
          <div className="category-image">
            <img src={CellPhone} alt="" />
            <p>Phones</p>
          </div>
          <div className="category-image">
            <img src={Computer} alt="" />
            <p>Computers</p>
          </div>
          <div className="category-image">
            <img src={SmartWatch} alt="" />
            <p>SmartWatch</p>
          </div>
          <div className="category-image camera">
            <img src={Camera} alt="" />
            <p>Camera</p>
          </div>
          <div className="category-image">
            <img src={HeadPhones} alt="" />
            <p>HeadPhones</p>
          </div>
          <div className="category-image">
            <img src={Gaming} alt="" />
            <p>Gaming</p>
          </div>
        </div>
      </div>
      <SellingProduct />
      <div className="JBL_HERO">
        <div className="JBL_BOX_ONE">
          <p className="first-child">Categories</p>
          <h3>
            Enhance Your
            <br /> Music Experience
          </h3>
          <section className="count-down">
            <div className="counts">
              <p>23</p>
              <p>Hours</p>
            </div>
            <div className="counts">
              <p>05</p>
              <p>Days</p>
            </div>
            <div className="counts">
              <p>59</p>
              <p>Minutes</p>
            </div>
            <div className="counts">
              <p>35</p>
              <p>Seconds</p>
            </div>
          </section>
          <button className="count-down-btn">Buy Now!</button>
        </div>
        <div className="JBL_BOX_TWO">
          <div>
            <img src={JBL_BOX} alt="JBL BOX" />
          </div>
        </div>
      </div>
      <AppProducts />
      <NewArrivals />
    </>
  );
}
