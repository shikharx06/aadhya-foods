import React, { Component } from 'react';
import logo from '../../assets/images/f.p-fb-size-logo.jpg'
import './navbar.css'



export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            navItems: [
                { name: "Home", isActive: true },
                { name: "Brand", isActive: false },
                { name: "About Us", isActive: false },
                { name: "Contact Us", isActive: false },
            ]
        }
        this.active = this.active.bind(this);
    }

    active = (i) => {

        this.state.navItems = this.state.navItems.map((item, idx) => {


            if (i === idx) {

                return (
                    { ...item, isActive: true }

                );
            }
            return ({ ...item, isActive: false });
        });

        this.setState({ navItems: this.state.navItems });

    }
    render() {
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
                                    <a className="uk-active uk-logo" href="/app"><img src={logo} width="100px"></img></a>
                                </ul>
                            </div>

                            <div data-uk-navbar className="uk-navbar-right">
                                <ul className="uk-navbar-nav"
                                    style={{ fontWeight: "bold" }}>
                                    {this.state.navItems.map((item, idx) => {
                                        return (
                                            <li key={idx} >
                                                <a href="#" className={item.isActive ? "active" : ""} onClick={() => {
                                                    this.active(idx);
                                                }}
                                                >
                                                    {item.name}
                                                </a>
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
                            {this.state.navItems.map((item, idx) => {
                                return (
                                    <li key={idx} >
                                        <a href="#" style={{ color: "white", textDecoration: "none !important" }}>
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </>

        );
    }
}
