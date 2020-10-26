import React from "react";
import "../home.css";

export default function FourthSection() {
  return (
    <div className=" uk-flex uk-flex-center">
      <div
        className="uk-grid-collapse uk-flex uk-flex-center uk-flex-middle"
        data-uk-grid
        data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 200; "
      >
        <div
          className="margin-right uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-middle"
          data-uk-scrollspy="cls: uk-animation-fade; target: #fadeAnimate; delay: 200;"
        >
          <iframe
            id="youtube-video"
            title="youtube video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1N8Bv1l_Kvs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div
          className="uk-flex uk-flex-column uk-text-left uk-width-1-2 uk-margin-large-right uk-margin-large-top uk-margin-large-bottom animate no-margin"
          style={{ maxWidth: "500px" }}
        >
          <h3 className="fourth-header-text">Go Green Initiative</h3>
          <p className="fourth-para-text">
            Pursue knowledge and practices that can lead to more environmentally
            friendly and ecologically responsible decisions and lifestyles,
            which can help protect the environment and sustain its natural
            resources for current and future generations
          </p>
        </div>
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=Av3vX50jTqA
