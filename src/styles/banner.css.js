import React from "react";
import { cssVariables } from '../constants/cssVariables';

function BannerCss() {
    return (
        <style jsx="true">{`
            .mainContainer {
                background-color: ${cssVariables.primaryColour};
                height: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .mainContainerText {
                color: ${cssVariables.primaryColourWhite};
                font-size: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
                width: 100%;
            }
            .mainContainerText>span{
                font-size: 60%;
                font-style: italic;
                padding-top: 7px;
            }
            .mainContainerTextRight {
                text-align: right;
            }
            @media only screen and (max-width: 950px) {
                
            }
            @media only screen and (max-width: 750px) {
                .mainContainerText {
                    font-size: 18px;
                }
            }
            @media only screen and (max-width:550px) {
                .mainContainerText {
                    display: none;
                }
            }
            .banner {
                height: 100%;
            }
            @media only screen and (max-width: 550px) {
                .textLogo {
                    height: 45%;
                    flex-direction: column-reverse;
                    align-items: center;
                }
            }
            .productGraphic {
                height: 100%;
            }
            @media only screen and (max-width: 550px) {
                .productGraphic {
                    height: 40%;
                }
            }
        `}
    </style>
    )
}

export default BannerCss;
