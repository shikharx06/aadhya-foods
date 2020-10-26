import React from "react";
import Images from "../../../theme/images";
import "../home.css";

const amazonLink =
  "https://www.amazon.in/Generic-Black-Wheat-Grain-Products/dp/B08GHHL4LC/ref=pd_sbs_325_5/257-0532015-3851414?_encoding=UTF8&pd_rd_i=B08GHHL4LC&pd_rd_r=937b7bcf-da23-4377-a53b-afe318c8febc&pd_rd_w=Ry3MV&pd_rd_wg=S08o9&pf_rd_p=00b53f5d-d1f8-4708-89df-2987ccce05ce&pf_rd_r=DGF621YP2XYGH2RF9668&psc=1&refRID=DGF621YP2XYGH2RF9668";

export default function FirstSection(props) {
  return (
    <div
      className="first-section uk-flex uk-flex-center uk-flex-middle overlay"
      data-uk-parallax="bgy: -200"
    >
      <div className="uk-grid-collapse uk-flex-around" data-uk-grid>
        <div
          className="uk-width-1-2@m uk-margin-large-top uk-margin-large-bottom uk-margin-large-left uk-margin-large-right uk-margin-auto@l"
          data-uk-scrollspy="cls:uk-animation-slide-top-small; target: .animate; delay: 300;"
        >
          <div className="uk-flex uk-flex-column uk-text-justify uk-text-left@m set-div animate background-first-section">
            <h3 className="header-text ">{props.title}</h3>
            <p className="header-para-text">{props.paragraph}</p>
            <button class="uk-button first-button">
              <a
                href={amazonLink}
                alt="buy on amazon"
                style={{
                  color: "#1d6a6e",
                  textDecoration: "none",
                  outline: "none",
                }}
              >
                Buy Now
              </a>
            </button>
          </div>
        </div>
        <div
          className="uk-width-1-2@m uk-flex uk-flex-center uk-flex-middle  uk-margin-large-top uk-margin-large-bottom phone-margin"
          data-uk-scrollspy="cls: uk-animation-fade; target: .animate; delay: 300; "
        >
          <img
            className="animate image shadow-image"
            src={Images.productBag}
            alt="aadhya-product"
            width="200px"
          />
        </div>
      </div>

      <div className="fixedRight uk-visible@l  ">
        <img src={Images.crop} alt="" width="150px" />
      </div>
      <div className="fixedLeft uk-visible@l  ">
        <img src={Images.crop} alt="" width="150px" />
      </div>
    </div>
  );
}
