import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar';
import Svg from '../assets/images/vector.svg'
export default class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="uk-width-expand"> <img src={Svg} /></div>

            </>
        );
    }
}