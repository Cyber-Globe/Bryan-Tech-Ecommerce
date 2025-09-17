import flashSales from "../components/assets/data";
import "./CSS/FlashSales.css";
import LeftArrow from "../components/assets/LeftArrow.png";
import RightArrow from "../components/assets/RightArrow.png";
import React, { useState, useEffect, useRef } from "react";

export default function FlashSales() {
  const targetDateRef = useRef(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDateRef.current - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flash-sales">
      <div className="flash-countdown">
        <h3 className="flash-title">Flash Sales</h3>
        <div class="time-box">
          <span class="label">DAYS</span>
          <span class="value">{timeLeft.days}</span>
        </div>
        <div class="time-box">
          <span class="label">Hrs</span>
          <span class="value">{timeLeft.hours}</span>
        </div>
        <div class="time-box">
          <span class="label">Min</span>
          <span class="value">{timeLeft.minutes}</span>
        </div>
        <div class="time-box">
          <span class="label">Sec</span>
          <span class="value">{timeLeft.seconds}</span>
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
