import React from "react";
import Images from "../../theme/images";
import "./product.css";

const amazonlink =
  "https://www.amazon.in/Generic-Black-Wheat-Grain-Products/dp/B08GHHL4LC/ref=pd_sbs_325_5/257-0532015-3851414?_encoding=UTF8&pd_rd_i=B08GHHL4LC&pd_rd_r=937b7bcf-da23-4377-a53b-afe318c8febc&pd_rd_w=Ry3MV&pd_rd_wg=S08o9&pf_rd_p=00b53f5d-d1f8-4708-89df-2987ccce05ce&pf_rd_r=DGF621YP2XYGH2RF9668&psc=1&refRID=DGF621YP2XYGH2RF9668";

function FirstProductSection() {
  return (
    <div className="uk-grid-small" data-uk-grid>
      <div
        className="uk-width-1-2@m uk-margin-large-top  uk-flex uk-flex-center uk-flex-bottom"
        data-uk-scrollspy="cls:  uk-animation-slide-top-small target: .animate; delay: 300; "
      >
        <div className="uk-margin-large-left">
          <img className="animate aunty" src={Images.aunty} alt="product" />
        </div>
      </div>
      <div
        className="uk-width-1-2@m uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-center uk-flex-middle"
        data-uk-scrollspy="cls:  uk-animation-slide-top-small target: .animate; delay: 300;"
      >
        <div className="uk-flex uk-flex-middle uk-flex-center">
          <img
            className="animate"
            src={Images.aadhyaBanner}
            alt="product"
            width="80%"
          />
        </div>
      </div>
    </div>
  );
}

function SecondProductSection() {
  return (
    <div
      className="uk-grid-small second-section uk-flex uk-flex-middle uk-flex-center "
      data-uk-grid
      style={{ margin: "0" }}
    >
      <div className="uk-width-1-2@m uk-margin-large-top uk-visible@m">
        <div
          class="uk-position-relative"
          uk-slideshow="animation: fade"
          style={{ marginLeft: "80px" }}
        >
          <ul class="uk-slideshow-items">
            <li>
              <img
                src={Images.productFront}
                alt=""
                data-uk-cover
                style={{ maxWidth: "250px" }}
              />
            </li>
            <li>
              <img
                src={Images.productBack}
                alt=""
                data-uk-cover
                style={{ maxWidth: "250px" }}
              />
            </li>
            <li>
              <img
                src={Images.blackWheatBowl}
                alt=""
                data-uk-cover
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            </li>
          </ul>

          <div class="uk-position-center-left uk-position-small uk-visible@m">
            <ul class="uk-thumbnav uk-thumbnav-vertical">
              <li uk-slideshow-item="0">
                <button
                  style={{
                    background: "white",
                    width: "70px",
                    padding: "7px",
                    marginLeft: "4px",
                    border: "white",
                  }}
                >
                  <img src={Images.productFront} width="60px" alt="" />
                </button>
              </li>
              <li uk-slideshow-item="1">
                <button
                  style={{
                    background: "white",
                    width: "70px",
                    padding: "7px",
                    marginLeft: "4px",
                    border: "white",
                  }}
                >
                  <img src={Images.productFront} width="60px" alt="" />
                </button>
              </li>
              <li uk-slideshow-item="2">
                <button
                  style={{
                    background: "white",
                    width: "70px",
                    padding: "7px",
                    marginLeft: "4px",
                    border: "white",
                  }}
                >
                  <img src={Images.blackWheatBowl} width="60px" alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-width-1-2@m uk-margin-large-top  uk-flex uk-flex-first uk-flex-center">
        <div
          className="uk-flex uk-flex-column uk-text-left uk-margin-large-top uk-margin-large-bottom animate"
          data-uk-scrollspy="cls:  uk-animation-slide-top-small target: .animate; delay: 300;"
          style={{ maxWidth: "500px" }}
        >
          <h3 className=" animate fourth-header-text underline">
            Aadya aata with <br></br> multi grains
          </h3>
          <ul className="fourth-para-text">
            <li>
              <strong>CERTIFIED</strong> - Our Wheat Grain is prepared using
              Bio-fortified Colored Wheat developed by National Agri-Food
              Biotechnology Institute (NABI).
            </li>{" "}
            <li>
              <strong>HEALTH BENEFITS</strong> - Black Wheat Grain is a Non-GMO
              product and excellent choice when it comes to having a problem
              like Obesity,Stress,Diabetes and cancer treatment
            </li>{" "}
            <li>
              <strong> NUTRITIONAL VALUE</strong>- Our products are highly
              nutritious, rich in Anthocyanins. Anthocyanins are kind of
              Anti-oxidants and have anti-inflammatory properties and more
              vitamins and mineral like zinc and Iron
            </li>{" "}
          </ul>

          <button className="uk-button second-button">
            <a href={amazonlink}>Buy Now</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <div className="aboutUs-first-section uk-flex uk-flex-center uk-flex-middle uk-width-expand">
        <FirstProductSection />
      </div>
      <div>
        <SecondProductSection />
      </div>
    </>
  );
}
