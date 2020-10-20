import React from 'react'
import Images from '../../theme/images'
import './product.css';

function Card(props) {
    return (
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-2@m uk-text-center uk-margin-large-top uk-margin-left uk-flex uk-flex-center uk-flex-middle"
            style={{ background: props.color, width: "200px", borderRadius: "20px", padding: "3px" }}>
            <p className="card-body">{props.content}</p>
        </div>
    );
}


function FirstProductSection() {
    return (
        <div className="uk-grid-small" data-uk-grid>
            <div className="uk-width-1-2@m uk-margin-large-top"
                data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 300; repeat: true"
            >
                <div className="uk-margin-large-left"><img className="animate" src={Images.aunty} alt="product" width="600px" /></div>
            </div>
            <div className="uk-width-1-2@m uk-margin-large-top uk-margin-large-bottom uk-text-center uk-flex-center uk-flex-middle">
                <div className="uk-flex uk-flex-inline">
                    <Card color="orange" content="Rich in antioxidants to help you boost your immunity and cure cancer." />
                    <Card color="orange" content="Higher amount of fiber than normal wheat." />

                </div>
            </div>
        </div>
    );
}

function SecondProductSection() {
    return (
        <div className="uk-grid-small second-section" data-uk-grid>
            <div className="uk-width-1-2@m uk-margin-large-top">
                <div className="uk-flex uk-flex-column uk-text-left  uk-margin-large-left uk-margin-large-top uk-margin-large-bottom animate"
                    style={{ maxWidth: "500px" }}
                >
                    <h3 className="fourth-header-text">Aadhya aata with multi grains</h3>
                    <p className="fourth-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="uk-width-1-2@m uk-margin-large-top">
                <div class="uk-position-relative" uk-slideshow="animation: fade">

                    <ul class="uk-slideshow-items">
                        <li>
                            <img src={Images.productFront} alt="" uk-cover style={{ maxWidth: "250px" }} />
                        </li>
                        <li>
                            <img src={Images.productBack} alt="" uk-cover width="250px" />
                        </li>
                        <li>
                            <img src="" alt="" uk-cover />
                        </li>
                    </ul>

                    <div class="uk-position-center uk-position-small uk-visible@m">
                        <ul class="uk-thumbnav uk-thumbnav-vertical">
                            <li uk-slideshow-item="0"><a href="#"><img src={Images.productFront} width="60px" alt="" /></a></li>
                            <li uk-slideshow-item="1"><a href="#"><img src={Images.productBack} width="60px" alt="" /></a></li>
                            <li uk-slideshow-item="2"><a href="#"><img src="" width="100" alt="" /></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default function AboutUs() {

    return (
        <>
            <div className="aboutUs-first-section uk-flex uk-flex-center uk-flex-middle uk-width-expand" >
                <FirstProductSection />
            </div>
            <div>
                <SecondProductSection />
            </div >
        </>
    );
}


{/* <div className="uk-width-1-2 about-button">
<span className="about-button-text ">Rich in antioxidants to help <br />you boost your immunity <br />and cure cancer.</span>
</div>
<div className="uk-width-1-2 about-button">
<span className="about-button-text">Higher amount of fiber <br /> than normal wheat.</span>
</div>
<div className="uk-width-1-2 about-button">
<span className="about-button-text">Good source of iron <br /> and zinc.</span>
</div>
<div className="uk-width-1-2 about-button">
<span className="about-button-text">Zero sugar.</span>
</div> */}