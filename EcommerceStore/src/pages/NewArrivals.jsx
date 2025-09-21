import React from "react";
import ps5 from "../components/assets/ps5.png";
import attractive from "../components/assets/attractive-woman.png";
import speakers from "../components/assets/Frame707.png";
import spray from "../components/assets/Frame706.png";
import "./CSS/newArrivals.css";
export default function NewArrivals() {
  return (
    <div className="arrivals">
      <h4>New Arrival</h4>
      <div className="arrivals-flex">
        {/* Left column */}
        <div className="left-column">
          <img src={ps5} alt="PlayStation 5" />
          <div className="card-text">
            <h5>PlayStation 5</h5>
            <p>
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <p>Shop Now</p>
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          {/* Top row */}
          <div className="right-top">
            <img src={attractive} alt="Women's Collection" />
            <div className="card-text">
              <h5>Women’s Collections</h5>
              <p>
                Featured woman collections <br /> that give you another vibe.
              </p>
              <p>Shop Now</p>
            </div>
          </div>

          {/* Bottom row with 2 cards */}
          <div className="right-bottom">
            <div className="card">
              <img src={speakers} alt="Men’s Collection" />
              <div className="card-text">
                <h5>Men’s Collections</h5>
                <p>
                  Trendy men’s outfits <br /> available now.
                </p>
                <p>Shop Now</p>
              </div>
            </div>

            <div className="card">
              <img src={spray} alt="Accessories" />
              <div className="card-text">
                <h5>Accessories</h5>
                <p>
                  Stylish accessories <br /> for every look.
                </p>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
