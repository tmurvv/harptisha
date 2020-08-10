import React, { useState } from 'react';
import {withRouter} from 'next/router'
import ContactUsForm from './ContactUsForm'

const Product_Harp = (props) => {
    return (
        <>
        <div className="product" style={{margin: '7.5px', width: '300px'}}>
            <h3 className="product__title">{props.product.name}</h3>
            <img height='200px' src={props.product.image} alt={props.product.name} className="product__image"/>
            <div className="product__price-button-container">
                <div className="product__price">${props.product.price.toFixed(2)}US</div>
                <p className="product__description">{props.product.description}</p>
            </div>
            <button data-id={props.product.name} className="detailButton" style={{zIndex: '-1'}} onClick={(e)=>props.handleClick(e)}>Ask Tisha about this harp</button>
        </div>
        </>
    )
}

export default withRouter(Product_Harp)
