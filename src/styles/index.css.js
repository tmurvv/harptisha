import React from 'react';
import { cssVariables } from '../constants/cssVariables';

function IndexCss() {
    return (
        <style jsx="true">{`
            a {
              color: ${cssVariables.greyColourDark};
              text-decoration: underline;
            }
            .index {
                background-image: linear-gradient(to bottom, #eaeaea, #ffffff 300px);
                margin: 0;
                padding: 30px;
                height: fit-content;
                min-height: 100vh;
            }
            .index h2 {
                margin-block-end:0;
                margin-block-start:0;
            }
            .main {
                margin: 2rem;
              }
              @media only screen and (max-width: 37.5em) {
                .main {
                  margin: 1rem;
                }
              }
              .main > ul {
                margin-top: 1rem;
              }
              @media only screen and (max-width: 37.5em) {
                .main {
                  margin: 1rem;
                }
              }
              @media only screen and (max-width: 37.5em) {
                .main > h1 {
                  font-size: 160%;
                }
              }
              .main > h1 > span {
                color: #7a5042;
              }
              .main__image > img {
                margin: 1rem;
              }
              .main__collage {
                display: flex;
                width: 100%;
                justify-content: space-between;
              }
              .main__collage--col1 {
                width: 100%;
              }
              .main__image--hands {
                width: 35%;
                height: 415px;
                background-image: url("https://res.cloudinary.com/take2tech-ca/image/upload/v1555114552/harptisha/tishaHandsAdjustColor.jpg");
                background-size: cover;
                margin-top: 1rem;
                float: right;
                border-radius: 7px;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--hands {
                  width: 40%;
                }
              }
              @media only screen and (max-width: 550px) {
                .main__image--hands {
                  display: none;
                }
              }
              .main__image--laurentries > img {
                width: 25%;
                float: left;
                margin-top: 2.5rem;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--laurentries > img {
                  float: none;
                  width: 65%;
                  margin-left: 0;
                }
              }
              .main__image--dawn > img {
                width: 25%;
                float: right;
                margin-top: 3rem;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--dawn > img {
                  float: none;
                  width: 65%;
                  margin-left: 0;
                }
              }
              .main__image--alita > img {
                width: 95%;
                margin: 2rem 0;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--alita > img {
                  width: 90%;
                }
              }
              .main__image--karen > img {
                float: right;
                width: 95%;
                margin-top: 2rem;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--karen > img {
                  margin-bottom: 0.5rem;
                  width: 90%;
                }
              }
              .main__image--lauren > img {
                float: right;
                width: 95%;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--lauren > img {
                  margin-bottom: 0.5rem;
                  margin-top: 0;
                  width: 90%;
                }
              }
              .main__image--skype > img {
                width: 95%;
                float: right;
                margin-left: 0;
              }
              @media only screen and (max-width: 37.5em) {
                .main__image--skype > img {
                  margin-top: 0;
                  width: 90%;
                }
              }
              .main__image--skype > img > p {
                padding-left: 5%;
              }
              .main h1,
              .main h3,
              .main h4 {
                font-weight: 400;
              }
              .main h3 {
                font-style: italic;
              }
              .main h4 {
                font-size: 138%;
                margin-top: 2rem;
              }
              @media only screen and (max-width: 37.5em) {
                .main h4 {
                  margin-top: inherit;
                }
              }
              .main ul {
                list-style-position: inside;
              }
              @media only screen and (max-width: 550px) {
                .main ul {
                  padding-inline-start: 20px;
                }
              }
              .contactArea {
                border: 1px solid #333;
                border-radius: 7px;
                margin: 50px 2rem 75px;
              }
              @media only screen and (max-width: 37.5em) {
                .contactArea {
                  margin: 50px 1rem 75px;
                }
              }
              .contactArea__title {
                background-color: #f1f1f1;
                border-radius: 7px;
                padding: 10px;
                text-align: center;
                font-size: 30px;
                letter-spacing: 1.3px;
                font-weight: 600;
                color: #7a5042;
              }
              .contactArea__text {
                padding: 25px;
                text-align: center;
              }
        `}
    </style>
    )
}

export default IndexCss;
