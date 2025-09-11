import flashSales from "../components/assets/data";
import "./CSS/FlashSales.css";
import LeftArrow from "../components/assets/LeftArrow.png";
import RightArrow from "../components/assets/RightArrow.png";

export default function FlashSales() {
  return (
    <section className="flash-sales">
      <div className="flash-countdown">
        <h3 className="flash-title">Flash Sales</h3>
        <div class="time-box">
          <span class="label">DAYS</span>
          <span class="value">12</span>
        </div>
        <div class="time-box">
          <span class="label">Hrs</span>
          <span class="value">23</span>
        </div>
        <div class="time-box">
          <span class="label">Min</span>
          <span class="value">19</span>
        </div>
        <div class="time-box">
          <span class="label">Sec</span>
          <span class="value">56</span>
        </div>
        <div className="flash-arrow">
          <span>
            <img src={LeftArrow} alt="" />
          </span>
          <span>
            <img src={RightArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="flash-grid">
        {flashSales.map((item) => (
          <div key={item.id} className="flash-card">
            {/* Discount Banner */}
            <div className="flash-banner">
              <span className="discount">${item.discount}</span>
            </div>

            <img src={item.image} alt={item.name} className="flash-img" />
            <button className="flash-btn">Add to Cart</button>
            <p className="flash-name">{item.name}</p>
            <p>
              <span className="new-price">${item.new_price}</span>{" "}
              <span className="old-price">${item.old_price}</span>
            </p>
            <p>
              ⭐⭐⭐⭐⭐<span className="percentage">{item.percentage}%</span>
            </p>
          </div>
        ))}
      </div>
      <button className="product-btn">View All Products</button>
    </section>
  );
}
