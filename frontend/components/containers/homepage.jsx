import React from 'react';
import NavBarContainer from './navbar_container';
import ConversionCalculatorContainer from './conversion_calculator_container';

const HomePage = (props) => {

    return(
        <div className="home-page">
            <NavBarContainer />
            <div className="home-main">
                <div className="main-left">
                    <div className="main-heading">
                        <span>A cheaper, faster way to send money abroad</span><span>.</span>
                    </div>
                    <div className="main-subheading">Join over 5 million people and businesses who get a better deal when they send money with the real exchange rate.</div>

                </div>
                <ConversionCalculatorContainer />
            </div>
        </div>
    )
};

export default HomePage;