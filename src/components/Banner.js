import React from 'react';
import BannerCss from '../styles/banner.css';
 
function Banner() {
    return (
        <>
        <div className="mainContainer flexSB">
            <div className="mainContainerText">Harp Lessons<span>&nbsp;&nbsp;with</span></div>
            <img className="banner" src="img/hero1_crop.jpg" alt="Your Brand Here Banner"/>
            <div className="mainContainerText mainContainerTextRight">Tisha Murvihill</div>
        </div>
        <BannerCss />
        </>
    )
}

export default Banner;
