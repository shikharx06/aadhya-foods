import React, { Component } from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import Home from './HomePage/Home';
export default class Main extends Component {
    render() {
        return (
            <>
            <BrowserRouter>
                <Navbar />
               
               
               
               
               
               
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
           </BrowserRouter>
            </>
        );
    }
}