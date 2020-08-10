
import { cssVariables } from '../constants/cssVariables';

function ContactUsFormCSS() {
    return (
        <style jsx="true">{`
            h2 {
                font-size: 36px;
                margin-bottom: 50px;
                margin-block-start: 0;
                margin-block-end: 0;
            }
            h3 {
                margin-block-end: 0;
                margin-block-start: 0;
                font-family: 'Metropolis Extra Bold';
            }
            .contactFormContainer {
                border-radius: 3px;
                padding: 20px;
                padding-top: 0;
                text-align: center;
                max-width: 700px;
                margin: auto;
            }
            @media only screen and (max-width: 650px) {
                .contactFormContainer {
                    padding: 0;
                }
            }
            .contactFormContainer p {
                width: fit-content;
            }
            .contactArea {
                display: flex;
                justify-content: space-between;
            }
            @media only screen and (max-width: 950px) {
                .contactArea {
                    flex-direction: column;
                }
            }
            .contactText {
                flex: 4;
                height: 100%;
                padding: 0px 20px 20px 0;
                text-align: left;
            }
            @media only screen and (max-width: 700px) {
                .contactText {
                    padding-left: 0;
                    padding-right: 0;
                    margin-bottom: 30px;
                }
            }
            .contactText p {
                margin-block-start: 0;
                margin-block-end: 0;
                text-align: justify;
            }
            span {
                text-align:center;
            }
            label {
                font-family: 'Avenir';
                font-family: 'avenir';
                transform: translateY(3.5px);
            }
            .contactForm {
                padding: 20px;
                flex: 6;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border: 2px solid ${cssVariables.primaryColour};
                background-color: #ffffff;
                margin: auto;
                width: 700px;
                z-index: 1000;
            }
            @media only screen and (max-width: 700px) {
                .contactForm {
                    padding-left: 20px;
                    margin-left: 0;
                }
            }
            
            .contactForm p {
                text-align: center;
                margin-block-start: 0;
                margin-block-end: 0;
                height: auto;
                transition: all .7s;
            }
            .marginTop {
                margin-top: 15px;
            }
            .marginTopLarge {
                margin-top: 40px;
            }
            .clearModal {
                position: fixed;
                bottom: 15px;
                right: 15px;
                color: black;
            }
            .clearModal img{
                width: 35px;
            }
            .inputGroup {
                margin-top: 15px;
                display: flex;
            }
            .inputGroup label {
                flex:2;
                text-align: right;
                margin-right: 20px;
                vertical-align: -7px;
                font-size: 16px;
                font-family: 'lato';
                font-weight: 800;
                color: #000000;
                max-width: 85px;
            }
            .inputGroup input {
                background-color: transparent;
                flex: 7.5;
                height: 20px;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid #bbbbbb;
            }
            textarea {
                background-color: transparent;
                flex: 7.5;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid #bbbbbb;
            }
            .buttons {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
            }
            .button {
                height: 40px
            }
            #loadingLogin {
                display: none;
                color: ${cssVariables.greyColour};
                border: 2px solid ${cssVariables.greyColour};
                background-color: #fff;
                padding: 30px;
                border-radius: 3px;
                width: 294px;
                margin:auto;
                position: absolute;
                top: 25%;
                right: 50%;
                transform: translate(50%, 75%);
                z-index: 5000;
            }
            #loadingLoginImg {
                display: block;
                height: 50px;
                margin: auto;
            }
            #loadingLoginOk,
            #loadingLoginTryAgain {
                display: none;
                padding: 7px;
            }
            #loadingLoginText {
                text-align: center;
            }
            .submit-btn {
                width: 100%;
                margin-top: 10px;
                // text-align: center;
                // padding: 5px 0;
                border-radius: 3px;
                background-color: ${cssVariables.primaryColourLight};
                color: #000;
                border: none;
                // transition: 0.5s cubic-bezier(0.72, 0.15, 0.53, 0.84);
            }
            .submit-btn-tryAgain {
                background-color: #333333;
                margin-left: 30px;
                color: white;
            }
        `}
        </style>
    )
}

export default ContactUsFormCSS;
