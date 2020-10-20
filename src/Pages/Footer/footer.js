import React from 'react'
import './footer.css'


export default function Footer() {
    return (
        <div className="footer uk-flex uk-flex-center uk-child-width-1-2" >
            <div class="uk-grid-divider uk-child-width-expand@s uk-margin-large-top uk-margin-large-bottom " data-uk-grid>
                <div className="footer-item">
                    <h3>
                        ABOUT US
                    </h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="footer-item">
                    <h3>
                        CAREERS
                    </h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="footer-item">
                    <h3>
                        INVESTORS
                    </h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="footer-item">
                    <h3>
                        FOLLOW US
                    </h3>
                    <div >
                        <a className="uk-margin-small-right insta" alt="facebook" href="#" data-uk-icon="icon: facebook"></a>
                        <a className="uk-margin-small-right facebook" alt="instagram" href="#" data-uk-icon="icon: instagram"></a>
                        <a className="uk-margin-small-right twitter" alt="twitter" href="#" data-uk-icon="icon: twitter"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}