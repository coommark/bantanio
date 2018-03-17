import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => (
    <div className="main-header16">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">
                    <div className="logo logo16">
                        <h1 className="hidden">Online Shop</h1>
                        <Link to="/"><img src={require("../../../themes/frontend/images/home16/logo.png")} alt="" /></Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                </div>
            </div>
        </div>
    </div>
);

export default MainHeader;
