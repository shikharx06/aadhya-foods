import React from 'react'
import Images from '../../../theme/images'
import '../home.css'

export default function FirstSection() {

    return (
        <div className="first-section uk-flex uk-flex-center uk-flex-middle" data-uk-parallax="bgy: -200" >
            <div className="uk-grid-collapse  uk-flex-around" data-uk-grid>
                <div className="uk-width-1-2@m uk-margin-large-top uk-margin-large-bottom uk-margin-large-left uk-margin-large-right uk-margin-auto@l"
                    data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 300; repeat: true"
                >
                    <div className="uk-flex uk-flex-column uk-text-center uk-text-left@m  animate " >
                        <h3 className="header-text">Light</h3>
                        <p className="header-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button class="uk-button first-button">Button</button>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-flex uk-flex-center uk-flex-middle  uk-margin-large-top uk-margin-large-bottom"
                    data-uk-scrollspy="cls: uk-animation-scale-up; target: .animate; delay: 300; repeat: true"
                >
                    <img className="animate" src={Images.productBag} alt="aadhya-product" width="200px" />
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