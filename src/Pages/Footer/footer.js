import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Images from "../../theme/images";

export default function Footer() {
  return (
    <div className="footer uk-flex uk-flex-center uk-child-width-1-2">
      <div
        class="uk-grid-divider uk-child-width-expand@s uk-margin-large-top uk-margin-large-bottom "
        data-uk-grid
      >
        <div className="footer-item uk-flex uk-flex-column">
          <h3>ABOUT US</h3>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            alt="home"
          >
            Home
          </Link>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            Product
          </Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Privacy Policy
          </Link>
        </div>
        <div className="footer-item">
          <h3>CAREERS</h3>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Why Aadhya
            </Link>
          </li>
          <Link
            to="/contactus"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </div>

        <div className="footer-item">
          <h3>FOLLOW US</h3>
          <div className="footer-icon">
            <a href="https://www.facebook.com/Aadya-Food-Products-115844276943172">
              <img src={Images.facebook} alt="facebook" width="40px"></img>
            </a>
          </div>
          <div className="">
            <a href="https://www.instagram.com/invites/contact/?i=1b7epac3j6kow&utm_content=juhl1z8">
              <img src={Images.instagram} alt="instagram" width="40px"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
