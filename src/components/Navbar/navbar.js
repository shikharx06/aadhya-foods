import React from 'react';
import Images from '../../theme/images';
import './navbar.css'
import { NavLink } from "react-router-dom";


export default function Nav() {

    const navItems = [
        { name: "Home", route: '/', exact: true },
        { name: "products", route: '/products' },
        { name: "About Us", route: '/aboutus' },
    ]

    return (
        <>
            {/* Navbar for desktop */}
            <div className="uk-width-expand NavItemHover " data-uk-sticky=" sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive:  uk-dark; top: 10">
                <nav className="uk-navbar-container">
                    <div className="uk-container uk-container-1-1 uk-navbar-right ">
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav uk-margin-left">
                                <NavLink to="/" className="uk-active uk-logo" ><img src={Images.logo} alt="Aadhya Foods" width="90px" /></NavLink>
                            </ul>
                        </div>

                        <div data-uk-navbar className="uk-navbar-right uk-visible@s">
                            <ul className="uk-navbar-nav"
                                style={{ fontWeight: "bold" }}>
                                {navItems.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <NavLink to={item.route} activeClassName="active" exact={item.exact}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* button to toggle hamburger icon */}
                        <div className="uk-navbar-right uk-hidden@s">
                            <button className="uk-button  uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-usage" uk-icon="menu"
                                style={{ border: "none" }}></button>
                        </div>
                    </div>
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
