import React from "react";
import { cssVariables } from '../constants/cssVariables'

function StoreCss() {
    return (
        <style jsx="true">{`
            h2 {
                width: fit-content;
                margin: auto;
                font-size: 20px;
            }
            .product-list {
                display: flex; 
                flex-wrap: wrap; 
                padding: 50px;
                padding-top: 25px;
                justify-content: space-between;
            }
            .product-list-header {
                padding: 10px 25px;
                background-color: ${cssVariables.greyColour};
                color: white;
                border-radius: 3px;
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
            .storeButtons {
                width: 90%;
                margin: 50px auto 0;
            }
            .storeButton {
                margin:10px;
                width: 25%;
                background: #6A75AA;
                font-family: Lato;
                color: #ffffff;
                border-radius: 0 0 4px 4px;
                border: 0;
                padding: 12px 16px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: block;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
        `}
        </style>
    )
}

export default StoreCss;
