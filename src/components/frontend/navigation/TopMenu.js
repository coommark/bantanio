import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => (
    <div className="header-nav16">
        <div className="container">
            <div className="nav-social16">
                <div className="row">
                    <div className="col-md-9 col-sm-12 col-xs-12">
                        <nav className="main-nav main-nav16">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                            <a href="#" className="toggle-mobile-menu"><span></span></a>
                        </nav>
                    </div>
                    <div className="col-md-3 hidden-sm hidden-xs">
                        <div className="social-header social-header16">
                            <a href="#"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                            <a href="#"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                            <a href="#"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TopMenu;
