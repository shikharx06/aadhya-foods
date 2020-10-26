import React from "react";
import "./ContactUs.css";

// function Maps() {
//     return (

//     );
// }

export default function ContactUs() {
  return (
    <>
      <div
        className="uk-grid-collapse"
        data-uk-grid
        style={{ background: "#fff4e3" }}
      >
        <div className="uk-width-1-2@m">
          <div className="uk-flex uk-flex-column uk-text-justify uk-text-left@m margin-phone">
            <h2 className="contact-header contact-underline">CONTACT US</h2>
            <h3>Send us your inquiry</h3>
            <div
              className="uk-margin-large-bottom uk-text-justify@s"
              style={{}}
            >
              <strong>
                Vill Dhaukalpur,Sirohsarai,Ghatampur Kanpur, UP- 209308
              </strong>
              <br></br>
              <br></br>
              We are available 24 hours to hear from you. If you have any
              business or product related query, do reach out to us. We would be
              more than happy to help you with your queries if any
            </div>
            <div className="uk-margin-small-bottom">
              <a
                href="mailto: care@aadyafoodproducts.com"
                alt="mail"
                style={{ color: "black", textDecoration: "none" }}
              >
                <span
                  data-uk-icon="icon: mail"
                  className="uk-margin-small-right"
                ></span>{" "}
                care@aadyafoodproducts.com
              </a>
            </div>
            <div className="uk-margin-small-bottom">
              <a
                href="tel:9739849127"
                style={{ color: "black", textDecoration: "none" }}
              >
                <span
                  data-uk-icon="icon: receiver"
                  className="uk-margin-small-right"
                ></span>
                +91- 9739849127
              </a>
            </div>
          </div>
        </div>
        <div className="uk-width-1-2 uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-center uk-flex-middle">
          <iframe
            title="location"
            id="mapframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28651.557546200176!2d80.14830443186315!3d26.149643141561214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c543e1b78b299%3A0x1a6158ce80a397f!2sGhatampur%2C%20Uttar%20Pradesh%20209206!5e0!3m2!1sen!2sin!4v1603737280631!5m2!1sen!2sin"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
