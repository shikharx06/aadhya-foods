import React from 'react'
import Images from '../../../theme/images'
import '../home.css'

export default function SecondSection() {

    return (
        <div className="second-section uk-flex uk-flex-center">
            <div className="uk-grid-collapse  uk-flex uk-flex-center" data-uk-grid
                data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 200; repeat: true"
            >
                <div className="uk-width-1-2@m uk-margin-large-top uk-margin-large-bottom uk-margin-large-left  uk-margin-auto@l animate"   >
                    <div className="uk-flex uk-flex-column uk-text-center uk-text-left@m ">
                        <h3 className="second-section-header-text">Health Benefits</h3>
                        <p className="second-section-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button class="uk-button second-button">Button</button>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-flex uk-flex-center uk-flex-middle  uk-margin-large-top uk-margin-large-bottom">
                    <img src={Images.mahila} alt="aadhya-product" width="350px" />
                </div>
            </div>
        </div>
    );
}