import React from "react";
import hero_img from "../components/assets/SideImage.png";
import cardSer from "../components/assets/Services.png";
import servicesColor from "../components/assets/servicesColor.png";
import hux from "../components/assets/Services22.png";
import dollar from "../components/assets/Services333.png";
import x from "../components/assets/x2.png";
import instagram from "../components/assets/instagram_icon.png";
import linkedIn from "../components/assets/LinkedIn2.png";
import tom from "../components/assets/tom.png";
import Emma from "../components/assets/Emma.png";
import will from "../components/assets/will.png";
import services1 from "../components/assets/Services1.png";
import services2 from "../components/assets/Services2.png";
import services3 from "../components/assets/Services3.png";

import Footer from "./Footer";

import { Link } from "react-router-dom";
import "./CSS/about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-nav">
        <p>
          <Link to="/" className="active">
            Home /
          </Link>
          <Link to="/">About</Link>
        </p>
      </div>
      <div className="abour-hero">
        <div className="about-hero-first">
          <h2>Our Story</h2>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="about-hero-second">
          <img src={hero_img} alt="image of a product of about page" />
        </div>
      </div>
      <div className="about-services">
        <div className="about-card ">
          <img src={cardSer} alt="card image of about services" />
          <h4>10.5k</h4>
          <p>Sallers active our site</p>
        </div>

        <div className="about-card child-2">
          <img src={servicesColor} alt="card image of about services" />
          <h4>33k</h4>
          <p>Mopnthly Produduct Sale</p>
        </div>

        <div className="about-card">
          <img src={hux} alt="card image of about services" />
          <h4>45.5k</h4>
          <p>Customer active in our site</p>
        </div>

        <div className="about-card">
          <img src={dollar} alt="card image of about services" />
          <h4>25.5k</h4>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <div className="staff">
        <div className="staff-info">
          <img src={tom} alt="" />
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <div className="social-Acct">
            <img className="social-img" src={x} alt="X formally Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
        <div className="staff-info">
          <img src={Emma} alt="" />
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <div className="social-Acct">
            <img src={x} alt="X formally Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>

        <div className="staff-info">
          <img src={will} alt="" />
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <div className="social-Acct">
            <img src={x} alt="X formally Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
      </div>
      <section className="services-icon">
        <div>
          <img src={services1} alt="services-image-icon" />
          <div className="services-text">
            <h5>FREE AND FAST DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
          <img src={services2} alt="services-image-icon" />
          <div className="services-text">
            <h5>24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div>
          <img src={services3} alt="services-image-icon" />
          <div className="services-text">
            <h5>MONEY BACK GUARANTEE</h5>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
