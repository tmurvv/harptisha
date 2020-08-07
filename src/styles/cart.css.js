import React from "react";
import { cssVariables } from '../constants/cssVariables'

function CartCss() {
    return (
        <style jsx="true">{`
        // body, ul, h1, h2, h3, form, input, li { margin: 0; padding: 0 }
       
        #cart {
            margin: 75px auto;
            display: flex;
            width: fit-content;
            background-color: #fff;
            border: 1px lightgrey solid;
            box-shadow: 2px 2px 2px rgba(0,0,0,.3);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
        }
        
        .items {
            float: left;
            width: fit-content;
            min-width: 300px;
            margin: 0 5px;
            height: 100%;
            padding-left: 15px;
            padding-top: 15px;
        }
        
        .subTotal {
            float: left;
            width: 180px;
            margin: 0;
            height: 100%;
            background-color: #ECF0F1;
            text-align: center;
            padding: 15px;
        }
        
        .items h1 {
            margin: 5px 0;
            font-size: 24px;
            color: #2C3E50;
        }
        
        .subTotal h1 {
            margin: 10px 0;
            font-size: 20px;
            color: #34495E;
        
        }
        
        .subTotal h2 {
            margin: 5px auto;
            font-size: 16px;
            color: #34495E;
        
        }
        
        .subTotal h3 {
            margin: 15px 0;
            font-size: 20px;
            color: #16A085;
            font-weight: bold
        }
        
        .subTotal h4 {
            margin: 15px 0;
            font-size: 12px;
            color: rgba(0,0,0,.3);
        }
        
        .checkout {
            height: 30px;
            line-height: 30px;
            width: 100px;
            margin: 10px auto;
            background-color: #E74C3C;
            color: #fff;
        }
        
        form {
            font-size: 14px;
            color: #1ABC9C;
        }
        
        input[type=checkbox] {
            margin-right: 5px;
        }
        .cartButton {
            float: right;
            cursor: pointer;
            margin: 10px;
            display: flex;
        }
        .cartButton img {
            height: 45px;
            width: unset;
        }
        .cartButton p {
            margin-block-start: 0;
            margin-block-end: 0;
            font-weight: 600;
            font-size: 24px;
            transform: translate(35px, -5px);
        }
        /*********************************************/
        
        ul { margin: 0; padding: 0 }
    
        ul li { 
            list-style-type: none; 
        }
    
        .item { 
            width: 660px; 
            height: 100px;
            margin: 10px auto;
            text-align: left;
        }
        
        #cart img { 
            display: block;
            border: 0; 
            padding: 0; 
            margin: 0 auto; 
            margin-top: 10px; 
            width: 75px; 
            height: 80px; 
        }
        
        .product_image { 
            float: left;
            width: 100px;
        }
        
        .description { 
            float: left; 
            padding-left: 5px; 
            float: left; 
            width: 300px;
            height: 100px;
        }
        
        .description h1 {
            font-size: 14px; 
            color: ${cssVariables.primaryColour}
        }
        
        .description h2 {
            font-size: 14px; 
            color: #2c3e50;
            margin: 5px 0;
        }
        
        .description h3 {
            display: inline-block;
            font-size: 12px; 
            height: 20px; 
            line-height: 20px; 
            width: 100px;  
            text-align: center;
            margin: 15px 0;
        }
        
        .description h3.delete {
            background-color: #c0392b;
            color: #fff;
        }
        
        .description h3.save {
            background-color: #1ABC9C;
            color: #fff;
        }
        
        .product_quantity {
            float: left; 
            width: 100px; 
            height: 100px
        }
        
        .quantity_button {
            margin: 33px auto;
            height: 26px;
            width: 71px;
            text-align: center;
            padding: 2px;
            background-color: #ECF0F1;
        }
        
        .how_many {
            width: 46px;
            float: left;
            height: 26px;
            line-height: 30px;
            font-size: 1.25em;
            background-color: #fff;
            color: #7F8C8D;
        }
        
        .add_sub {
            float: left;
            width: 25px;
        }
            
        .add {
            line-height: 13px;
            width: 100%;
            font-size: 10px;
            color: #1ABC9C;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
        } 
        .sub {
            line-height: 13px;
            font-size: 14px;
            color: #E74C3C;
            text-align: center;
            width: 100%;
            font-weight: bold;
            cursor: pointer;
        }
        .price { 
            float: left;
            width: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 1.5em;
            color: #2C3E50
        }
        /********************************/
        
        .save ul { margin: 0; padding: 0; display: inline;}
                
        .save ul li { 
            list-style-type: none; 
        }
    
        .saved_item { 
            
            float: left;
            width: 100px; 
            height: 130px;
            margin: 10px 5px;
        }
        
        .img { 
            display: block;
            border: 0; 
            padding: 0; 
            margin: 0 auto; 
            margin-top: 10px; 
            width: 75px; 
            height: 80px; 
        }
        
        .product_image { 
            float: left;
            width: 100px;
            height: 100px;
        }
        
        .add_cart {
            height: 30px;
            line-height: 16px;
            font-size: 12px;
            text-align: center;
            width: 100%;
            color: #16A085;
            font-weight: bold;
        }
        
        .save {
            width: 660px;
            height: 150px;
            margin: 0 auto;
        }
        
        `}
        </style>
    )
}

export default CartCss;
