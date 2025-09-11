import React from "react";
import { Link } from "react-router-dom";
import iphone16 from "../components/assets/iphone16.png";
import iphone16Image from "../components/assets/iphoneimage.png";
import "./CSS/Home.css";
import FlashSales from "./FlashSales";

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
    </>
  );
}
