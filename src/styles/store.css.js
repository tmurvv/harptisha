import React from "react";
import { cssVariables } from '../constants/cssVariables'

function StoreCss() {
    return (
        <style jsx="true">{`
            h2 {
                width: fit-content;
                margin: auto;
            }
            .product-list {
                display: flex; 
                flex-wrap: wrap; 
                padding: 50px;
                padding-top: 25px
            }
            .product-list-header {
                padding: 10px 25px;
                background-color: ${cssVariables.tertiaryColour};
                color: white;
                border-radius: 3px;
            }
            .logo>img {
                height: 100%;
            }
            .flexSB {
                display: flex;
                justify-content: center
            }
            .copy {
                font-size: 12px;
            }
        `}
        </style>
    )
}

export default StoreCss;
