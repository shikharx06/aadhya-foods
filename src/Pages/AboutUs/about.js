import React from "react";
import Images from "../../theme/images";
import "./about.css";
export default function AboutUs() {
  return (
    <>
      <div
        className=" uk-flex uk-flex-center "
        style={{ background: "#FFF4E3" }}
      >
        <div className="right-vector">
          <img src={Images.vector} alt="crafty desgins"></img>
        </div>
        <div className="left-vector">
          <img src={Images.vector} alt="crafty desgins"></img>
        </div>
        <div class="uk-flex uk-flex-wrap-around uk-flex-wrap-middle uk-flex-column uk-text-justify uk-width-1-2  uk-margin-large-bottom ">
          <h2 className="about-contact-header contact-underline uk-margin-large-top contact-header">
            About Us
          </h2>
          <p>
            Aadya Food Products is an initiative by like minded people of our
            generation and works to make a difference in the lives of every
            household family by empowering their nutritional value and health.
          </p>
          <div>
            <p>
              Our products support health and are made with loving care. Each
              product is filling the gap of your family nutritional needs and{" "}
              <strong>
                {" "}
                we believe in providing nutritional food at an affordable price
                to everyone.
              </strong>
            </p>
          </div>
          <div>
            <h3>Values</h3>
            <ul>
              <li>
                We support sustainable and safe methods of production that
                reduce environmental degradation, maintain the productivity of
                the land over time, and support the economic viability of family
                farms and rural communities.
              </li>
              <li>
                We provide outstanding products that deliver premium value to
                our customers
              </li>
            </ul>
          </div>
          <div>
            <h3>Our Commitment</h3>
            <ul>
              <li>
                Contribute fresh ideas and suggestions regularly and accept to
                take risks and new challenges
              </li>
              <li>
                To deliver Nutritional foods and products to our consumers.
              </li>
              <li>
                Take the initiative to meet the needs of health of people at
                hand rather than wait to be told what to do
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
