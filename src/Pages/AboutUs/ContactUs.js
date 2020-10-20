import React from 'react'
import Images from '../../theme/images'
import './ContactUs.css';

// function Maps() {
//     return (

//     );
// }


export default function ContactUs() {

    return (
        <>
            <div className="uk-flex uk-flex-center uk-flex-middle" style={{ background: "#fff4e3" }} >

                <div className="uk-grid-collapse" data-uk-grid>
                    <div className="uk-width-1-2@m  uk-width-expand@s uk-margin-large-top uk-margin-large-left">
                        <div className="uk-flex uk-flex-column uk-text-center uk-text-left@m ">
                            <h2 className="contact-header">CONTACT US</h2>
                            <h3>Send us your inquiry</h3>
                            <div className="uk-margin-large-bottom uk-text-justify@s" style={{}}>

                                We are available 24 hours to hear from you. If you have any business or product related query,
                                do reach out to us. We would be more than happy to help you with your queries if any

                        </div>
                            <div className="uk-margin-small-bottom">
                                <a href="mailto: shikharswat64@gmail.com" alt="mail" style={{ color: "black", textDecoration: "none" }}><span data-uk-icon="icon: mail" className="uk-margin-small-right"></span>ravirisk24@gmail.com</a>
                            </div>
                            <div className="uk-margin-small-bottom">
                                <a href="tel:123-456-7890" style={{ color: "black", textDecoration: "none" }}><span data-uk-icon="icon: receiver" className="uk-margin-small-right"></span>123-456-7890</a>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2 uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-center">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=greater%20noida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a>
                            </div>


                        </div>
                    </div>
                </div >
            </div>

        </>
    );
}

