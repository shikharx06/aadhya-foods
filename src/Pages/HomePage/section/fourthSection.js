import React from 'react'
import '../home.css'

export default function FourthSection() {

    return (
        <div className=" uk-flex uk-flex-center">
            <div className="uk-grid-collapse uk-flex uk-flex-center" data-uk-grid
                data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 200; repeat: true"

            >
                <div className="uk-margin-right uk-margin-large-top uk-margin-large-bottom"
                    data-uk-scrollspy="cls: uk-animation-fade; target: #fadeAnimate; delay: 200; repeat: true">
                    <iframe
                        id="fadeAnimate"
                        title="black wheat video"
                        height="300px"
                        src="https://www.youtube.com/embed/Av3vX50jTqA"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="uk-flex uk-flex-column uk-text-left uk-width-1-2 uk-margin-large-right uk-margin-large-top uk-margin-large-bottom animate"
                    style={{ maxWidth: "500px" }}
                >
                    <h3 className="fourth-header-text">Go Green Initiative</h3>
                    <p className="fourth-para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>



            </div>
        </div >
    );
}


// https://www.youtube.com/watch?v=Av3vX50jTqA