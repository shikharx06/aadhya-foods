import React from "react";
import Images from "../../../theme/images";
import "../home.css";

export default function SecondSection(props) {
  return (
    <div className="second-section uk-flex uk-flex-center">
      <div className="uk-grid-collapse  uk-flex-around" data-uk-grid>
        <div
          className="uk-width-1-2@m uk-width-1-1@s uk-margin-large-top uk-margin-large-bottom  uk-margin-auto@l"
          data-uk-scrollspy="cls: uk-animation-slide-top-small; target: .animate; delay: 300;"
        >
          <div className="uk-flex uk-flex-column uk-text-justify justify-center uk-text-left@m set-div animate ">
            <h3 className="second-header-text ">{props.title}</h3>
            <p className="header-para-text" style={{ color: "black" }}>
              {props.paragraph}
            </p>
            {/* <button class="uk-button second-button">Learn More</button> */}
          </div>
        </div>
        <div
          className="uk-width-1-2@m uk-width-expand@s uk-flex  uk-flex-middle uk-flex-center uk-margin-large-top uk-margin-large-bottom phone-margin"
          data-uk-scrollspy="cls: uk-animation-fade; target: .animate; delay: 300;"
        >
          <img
            className="animate image"
            src={Images.mahila}
            alt="aadhya-product"
            width="350px"
          />
        </div>
      </div>

      <div className="home-right-vector">
        <img src={Images.vectorRight} alt="vector"></img>
      </div>
      <div className="home-left-vector">
        <img src={Images.vector} alt="vector"></img>
      </div>
    </div>
  );
}
