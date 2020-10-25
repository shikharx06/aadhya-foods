import React from "react";
import "../home.css";
import Images from "../../../theme/images";
function Card(props) {
  return (
    <div
      className="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-2@m uk-text-center uk-margin-large-bottom uk-margin-large-top uk-margin-left image-container"
      style={{
        background: props.color,
      }}
    >
      <div className="border">
        <h3 className="uk-card-title">OUR STORY</h3>
        <p className="card-body">
          Lorem ipsum uk-text-center sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default function ThirdSection() {
  return (
    <div
      className="third-section uk-background-fixed"
      data-uk-scrollspy="cls: uk-animation-fade; target: .animate; delay: 200; repeat: true"
    >
      <div
        className="uk-grid  uk-flex uk-flex-center uk-flex-middle animate"
        data-uk-grid
      >
        <Card color="rgba(245, 49, 49, 0.5)" />
        <Card color="rgba(29, 105, 110, 0.5)" />
      </div>
    </div>
  );
}
