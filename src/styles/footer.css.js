import React from "react";
import { cssVariables } from '../constants/cssVariables'

function FooterCss() {
    return (
        <style jsx="true">{`
            .footer {
                // background-color: ${cssVariables.primaryColourDark};
                background-image: linear-gradient(340deg, ${cssVariables.secondaryColourLight} 20%, ${cssVariables.greyColourLight} 58%, ${cssVariables.primaryColourWhite} 74%, ${cssVariables.secondaryColourLight} 87%);
                color: ${cssVariables.primaryColourDark};
                height: 125px;
                font-size: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px 20px 10px;
            }
            .logo {
                height: 50px;
            }
            .logo>img {
                height: 100%;
            }
            .flexSB {
                display: flex;
                justify-content: space-between;
            }
            .copy {
                font-size: 12px;
            }
        `}
        </style>
    )
}

export default FooterCss;
