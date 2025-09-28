import barCode from "../components/assets/QrCode.png";
import googlePlay from "../components/assets/googleplay.png";
import appstore from "../components/assets/appstore.png";
import facebook from "../components/assets/facebook.png";
import x from "../components/assets/x.png";
import Instagram from "../components/assets/instagram.png";
import LinkedIn from "../components/assets/LinkedIn.png";

import "./CSS/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cards">
        <h4>Exclusive</h4>
        <h5>Subscribe</h5>
        <p>Get 10% off your first order</p>
        <div class="search-footer">
          <input type="search" placeholder="Enter your email" />
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div className="footer-cards">
        <h4>Support</h4>
        <p>111 Bijoy sarani, Dhaka,</p>
        <p>DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className="footer-cards">
        <h4>Account</h4>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>

      <div className="footer-cards">
        <h4>Quick Link</h4>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div className="footer-cards">
        <h4>Download App</h4>
        <p>Save $3 with App New User Only</p>
        <div className="apps-images">
          <div className="download">
            <img src={barCode} alt="barcode scanner" />
          </div>
          <div className="download">
            <div className="store">
              <img src={googlePlay} alt="image of google play store" />
            </div>
            <div>
              {" "}
              <img src={appstore} alt="image of App Store" />
            </div>
          </div>
        </div>
        <div className="social_icons">
          <img src={facebook} alt="facebook social media handle" />
          <img src={x} alt="x social media handle" />
          <img src={Instagram} alt="instagram social media handle" />
          <img src={LinkedIn} alt="Linkedln social media handle" />
        </div>
      </div>
    </footer>
  );
}
