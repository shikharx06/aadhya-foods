import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer uk-flex uk-flex-center uk-child-width-1-2">
      <div
        class="uk-grid-divider uk-child-width-expand@s uk-margin-large-top uk-margin-large-bottom "
        data-uk-grid
      >
        <div className="footer-item">
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
          <div>
            <a
              className="uk-margin-small-right insta"
              alt="facebook"
              href="#"
              data-uk-icon="icon: facebook"
            ></a>
            <a
              className="uk-margin-small-right facebook"
              alt="instagram"
              href="#"
              data-uk-icon="icon: instagram"
            ></a>
            <a
              className="uk-margin-small-right twitter"
              alt="twitter"
              href="#"
              data-uk-icon="icon: twitter"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
