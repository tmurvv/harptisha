import React from 'react';
import { cssVariables } from '../constants/cssVariables';

function AppCss() {
    return (
        <style jsx="true">{`
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
            .bg-tertiary {
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
            .fg-tertiary {
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
            }
            .detailButton {
                margin: 25px auto;
                background-image: linear-gradient(340deg, ${cssVariables.secondaryColourLight} 20%, ${cssVariables.tertiaryColourLight} 58%, ${cssVariables.primaryColourWhite} 74%, ${cssVariables.tertiaryColourLight} 87%);
                padding: 5px 10px;
                font-size: 16px;
                border-radius: 3px;
                outline: none;
                border-style: none;
                border-color: none;
                -webkit-box-shadow: 1.5px 1.5px 1.5px 0px #929191;
                box-shadow: 1.5px 1.5px 1.5px 0px #929191;
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
        `}
        </style>
    )
}

export default AppCss;
