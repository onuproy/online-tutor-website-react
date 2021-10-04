import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h2>Learn Web Design <br /> & Development.</h2>
                            <a href="#">See Services</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-image">
                            <img src="https://coderitsolution.com/wp-content/themes/CoderIT/assets/images/creative-comunications.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;