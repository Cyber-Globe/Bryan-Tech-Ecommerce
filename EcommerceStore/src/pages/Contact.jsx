import React, { useState } from "react";
import { Link } from "react-router-dom";
import phone from "../components/assets/icons-phone.png";
import email from "../components/assets/icons-mail.png";

import "./CSS/contact.css";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted: " + message);
    setMessage(""); // clear after submit
  };

  return (
    <div className="main-contact">
      <div className="contact-nav">
        <p>
          <Link to="/">Home /</Link>
          <Link to="/"> Contact</Link>
        </p>
      </div>

      <section className="contact-form">
        <div className="contact-details">
          <div className="phone-contact">
            <div className="phone">
              <img src={phone} alt="contact persons phone number" />
              <h4>Call To Us</h4>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <div className="email-address">
            <div className="email">
              <img src={email} alt="contact persons email address" />
              <h4>Write To Us</h4>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="form-details">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <input type="text" placeholder="Your Name*" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="number" placeholder="Your Phone *" />
            </div>

            <div className="message">
              <textarea
                value={message}
                onChange={handleChange}
                placeholder="Type your feedback here..."
                rows="5"
                cols="40"
                required
              />
            </div>

            <button type="submit">Send Massage</button>
          </form>
        </div>
      </section>
    </div>
  );
}
