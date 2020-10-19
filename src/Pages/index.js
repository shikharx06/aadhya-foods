import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import Home from './HomePage/home';
export default class Main extends Component {
    render() {
        return (
            <>

                <div className="uk-width-expand Nav">
                    <Navbar />
                </div>
                <div className="uk-width-expand transparent">
                    <Navbar />
                </div>
                <div className="uk-width-expand">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/aboutus">
                            <Home />
                        </Route>
                        <Route path="/products">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </>
        );
    }
}