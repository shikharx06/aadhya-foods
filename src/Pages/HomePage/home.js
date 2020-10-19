import React from 'react'
import Images from '../../theme/images'
import './home.css'
export default function Home() {
    return (
        <>


            <div className="uk-grid-collapse first-section uk-padding-top" data-uk-grid>
                <div className="uk-width-1-2@m  uk-flex uk-flex-center uk-flex-middle" >
                    <div className="">
                        <h3 className="header-text">Light</h3>
                        <p className="header-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button class="uk-button uk-button-default">Button</button>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-flex uk-flex-center uk-flex-middle"   >
                    <img src={Images.productBag} alt="aadhya-product" width="200px" />
                </div>
            </div>
        </>
    );
}




{/* <h3 className="header-text">Light</h3>
                            <p className="header-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button class="uk-button uk-button-default">Button</button>

                           */}
