import React from "react";
import Images from "../../../theme/images";
import "../home.css";

export default function SecondSection(props) {
  return (
    <div className="second-section uk-flex uk-flex-center">
      <div className="uk-grid-collapse  uk-flex-around" data-uk-grid>
        <div
          className="uk-width-1-2@m uk-width-1-1@s uk-margin-large-top uk-margin-large-bottom uk-margin-large-left uk-margin-large-right uk-margin-auto@l"
          data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 300; repeat: true"
        >
          <div className="uk-flex uk-flex-column uk-text-center justify-center uk-text-left@m set-div animate ">
            <h3 className="header-text ">{props.title}</h3>
            <p className="header-para-text" style={{ color: "black" }}>
              {props.paragraph}
            </p>
            <button class="uk-button second-button">Learn More</button>
          </div>
        </div>
        <div
          className="uk-width-1-2@m uk-width-expand@s uk-flex  uk-flex-middle uk-flex-center uk-margin-large-top uk-margin-large-bottom phone-margin"
          data-uk-scrollspy="cls: uk-animation-scale-up; target: .animate; delay: 300; repeat: true"
        >
          <img
            className="animate image"
            src={Images.mahila}
            alt="aadhya-product"
            width="350px"
          />
        </div>
      </div>
    </div>
  );
}
