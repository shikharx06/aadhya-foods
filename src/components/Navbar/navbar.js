import React from 'react';
import Images from '../../theme/images';
import './navbar.css'
import {NavLink} from "react-router-dom";


export default function Nav() {
  
    const navItems = [
        { name: "Home", route:'/', exact: true },
        { name: "products", route: '/products'},
        { name: "About Us", route: '/aboutus'},
    ]
  
        return (
            <>
                {/* Navbar for desktop */}
                <div className="Nav" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;  top: 200"
                    style={{ background: "white" }}
                >
                    <nav className="uk-navbar-container Nav ">
                        <div className="uk-container uk-container-expand uk-navbar-right uk-visible@m">
                            <div className="uk-navbar-left">
                                <ul className="uk-navbar-nav">
                                    <a className="uk-active uk-logo" href="/app"><img src={Images.logo} alt="Aadhya Foods" width="100px"/></a>
                                </ul>
                            </div>
                                                
                                <div data-uk-navbar className="uk-navbar-right">
                                    <ul className="uk-navbar-nav"
                                        style={{ fontWeight: "bold" }}>
                                        {navItems.map((item, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <NavLink to={item.route} activeClassName="selected">
                                                        {item.name}
                                                    </NavLink>                                              
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                        

                        </div>

                        {/* button to toggle hamburger icon */}
                        <button className="uk-button uk-button-default uk-margin-small-right uk-hidden@m " type="button" data-uk-toggle="target: #offcanvas-usage" uk-icon="menu"
                            style={{ border: "none" }}></button>
                    </nav>

                </div>

                {/* Nav for displays smaller than Nav */}
                <div id="offcanvas-usage" uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar uk-flex uk-flex-column">

                        <button className="uk-offcanvas-close" type="button" data-uk-close></button>

                        <ul className=" uk-nav-center uk-margin-auto-vertical uk-list uk-link-reset"
                            style={{ fontWeight: "bold" }}>
                            {navItems.map((item, idx) => {
                                    return (
                                        <li key={idx} >
                                            <NavLink to={item.route} activeClassName="active">
                                                {item.name}
                                            </NavLink>                                              
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </>

        );
    
}
