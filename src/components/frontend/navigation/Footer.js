import React from 'react';
let d = new Date();

const Footer = () => (
    <div className="footer footer1">
        <div className="container">
        </div>
        <div className="payment-method text-center">
        </div>
        <div className="footer-tabs">
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-8 col-xs-12">
                        <p className="copyright">Online Shop © 2018 - {d.getFullYear()} salsanda.com. All rights reserved.</p>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <p className="designby">Developed by: <a href="mailto:salsanda.com"> salsanda.com </a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
)

export default Footer;
