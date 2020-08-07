import React from 'react';
import { cssVariables } from '../constants/cssVariables';

function AppCss() {
    return (
        <style jsx="true">{`
        button,
        button>a {
            display: inline-block;
            border: none;
            padding: 1rem 2rem;
            margin: 0;
            text-decoration: none;
            background: ${cssVariables.tertiaryColour};
            color: #ffffff;
            font-family: sans-serif;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition: background 250ms ease-in-out, 
                        transform 150ms ease;
            -webkit-appearance: none;
            -moz-appearance: none;
            border-radius: 3px;
        }
        
        button:hover,
        button:focus, 
        button>a:hover,
        button>a:focus {
            background: ${cssVariables.tertiaryColourDark};
        }
        
        button:focus,
        button>a:focus {
            outline: none;
        }
        
        button:active, 
        button>a:active {
            transform: scale(0.99);
        }
            /* non-Stripe CSS */
            body {
                font-family: "Lato", sans-serif;
                font-weight: 400;
                line-height: 1.7;
                color: #666;
            }
            .bg-primary {
                background-color: #DDDACC;
            }
            .bg-primary-dark {
                background-color: #2F231F;
            }
            .bg-secondary {
                background-color: #CDB095;
            }
            .bg-grey {
                background-color: #F5141A;
            }
            .fg-primary {
                color: ##A49685;
            }
            .fg-primary-dark {
                color: #5F4F42;
            }
            .fg-secondary {
                color: #CDB095;
            }
            .fg-grey {
                color: #F5141A;
            }  
            body {
                overflow-x: hidden;
                margin: 0;
                margin-block-end: 0 !important;
                margin-block-start: 0 !important;
                font-family: lato;
                color: #5c5b5b;
            }
            h2 {
                margin-block-end:0;
                margin-block-start:0;
            }
            .mainTitle {
                text-align: center;
                margin: auto;
                letter-spacing: 1.5px;
                font-size: 24px
            }
            .subTitle {
                width: 60%;
                margin: auto;
                text-align: center;
                font-size: 16px;
                font-style: italic;
                font-weight: 500;
                color: #868686;
                letter-spacing: 1px;
                margin-bottom: 45px;
                font-family: lato;    
            }
            .menuButton {
                background-color: transparent;
                font-size: 14px;
                padding-top: 12px;
                position: relative;
                cursor: pointer;
                color: #fafbfc;
                border: none;
                outline: none;
            }
            @media only screen and (max-width: 550px) {
                .menuButton {
                    padding: 0
                }
            }  
            .divider {
                width: 90%;
                height: 7px;
                margin: auto;
                margin-bottom: 40px;
            }
            .flex {
                display: flex;
                justify-content: flex-start;
            }
            .flex-sa {
                display: flex;
                justify-content: space-around;
            }
            .flex-sb {
                display: flex;
                justify-content: space-around;
            }
            .relative {
                position: relative;
            }
            .marginLeft {
                margin-left: 15px;
            }
            .marginRight {
                margin-right: 15px;
            }
            .blueFontButton {
                background-color: 'white';
                outline: 'none';
                color:'#6A75AA';
                text-decoration: 'none'; 
                border: 'none'; 
                font-size: '14px';
                border-radius: 3px;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            .detailButton {
                margin: 25px auto;
                background-image: linear-gradient(340deg, ${cssVariables.secondaryColourLight} 20%, ${cssVariables.greyColourLight} 58%, ${cssVariables.primaryColourWhite} 74%, ${cssVariables.greyColourLight} 87%);
                padding: 5px 10px;
                font-size: 16px;
                border-radius: 3px;
                outline: none;
                border-style: none;
                border-color: none;
                -webkit-box-shadow: 1.5px 1.5px 1.5px 0px #929191;
                box-shadow: 1.5px 1.5px 1.5px 0px #929191;
                color: black;
                font-weight: 500;
            }
            .detailButton:active {
                box-shadow: none;
            }
            .detailButton-cancel {
                background-color: #333333;
                margin-left: 30px;
                color: white;
                background-image: none;
            }

            /* from Stripe website */
            #root {
                display: flex;
                align-items: center;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                font-size: 16px;
                -webkit-font-smoothing: antialiased;
            }
            form {
                width: 30vw;
                align-self: center;
                box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
                    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
                border-radius: 7px;
                padding: 40px;
            }
            input {
                border-radius: 6px;
                margin-bottom: 6px;
                padding: 12px;
                border: 1px solid rgba(50, 50, 93, 0.1);
                max-height: 44px;
                font-size: 16px;
                width: 100%;
                background: white;
                box-sizing: border-box;
            }
            .result-message {
                line-height: 22px;
                font-size: 16px;
            }
            .result-message a {
                color: rgb(89, 111, 214);
                font-weight: 600;
                text-decoration: none;
            }
            .hidden {
                display: none;
            }
            #card-error {
                color: rgb(105, 115, 134);
                font-size: 16px;
                line-height: 20px;
                margin-top: 12px;
                text-align: center;
            }
            #card-element {
                border-radius: 4px 4px 0 0;
                padding: 12px;
                border: 1px solid rgba(50, 50, 93, 0.1);
                max-height: 44px;
                width: 100%;
                background: white;
                box-sizing: border-box;
            }
            #payment-request-button {
                margin-bottom: 32px;
            }
            /* Buttons and links */
           
            button:hover {
                filter: contrast(115%);
            }
            button:disabled {
                opacity: 0.5;
                cursor: default;
            }
            /* spinner/processing state, errors */
            .spinner,
            .spinner:before,
            .spinner:after {
                border-radius: 50%;
            }
            .spinner {
                color: #ffffff;
                font-size: 22px;
                text-indent: -99999px;
                margin: 0px auto;
                position: relative;
                width: 20px;
                height: 20px;
                box-shadow: inset 0 0 0 2px;
                -webkit-transform: translateZ(0);
                -ms-transform: translateZ(0);
                transform: translateZ(0);
            }
            .spinner:before,
            .spinner:after {
                position: absolute;
                content: "";
            }
            .spinner:before {
                width: 10.4px;
                height: 20.4px;
                background: #5469d4;
                border-radius: 20.4px 0 0 20.4px;
                top: -0.2px;
                left: -0.2px;
                -webkit-transform-origin: 10.4px 10.2px;
                transform-origin: 10.4px 10.2px;
                -webkit-animation: loading 2s infinite ease 1.5s;
                animation: loading 2s infinite ease 1.5s;
            }
            .spinner:after {
                width: 10.4px;
                height: 10.2px;
                background: #5469d4;
                border-radius: 0 10.2px 10.2px 0;
                top: -0.1px;
                left: 10.2px;
                -webkit-transform-origin: 0px 10.2px;
                transform-origin: 0px 10.2px;
                -webkit-animation: loading 2s infinite ease;
                animation: loading 2s infinite ease;
            }
            @keyframes loading {
                0% {
                    -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }
            @media only screen and (max-width: 600px) {
                form {
                    width: 80vw;
                }
            }
        `}
        </style>
    )
}

export default AppCss;
