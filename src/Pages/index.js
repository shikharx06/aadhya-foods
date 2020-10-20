import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import PseudoNavbar from '../components/Navbar/pseudoNavbar';
import AboutUs from './AboutUs/ContactUs';
import Product from './Product/product';
import Footer from './Footer/footer'

import Home from './HomePage/home';
export default class Main extends Component {
    render() {
        return (
            <>
                <div className="uk-width-expand Nav uk-animation-slide-top">
                    <Navbar />
                </div>
                <div className="uk-width-expand transparent uk-animation-slide-top">
                    <PseudoNavbar />
                </div>
                <div className="uk-width-expand">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/aboutus">
                            <AboutUs />
                        </Route>
                        <Route path="/products">
                            <Product />
                        </Route>
                    </Switch>
                </div>
                <div>
                    <Footer />
                </div>

            </>
        );
    }
}