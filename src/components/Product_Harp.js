import React, { useState } from 'react';
import {withRouter} from 'next/router'
import ContactUsForm from './ContactUsForm'

const Product_Harp = (props) => {
    const [ open, setOpen ] = useState(false);
    function reset() {
        setOpen(false);
    }
    return (
        <div className="product" style={{margin: '7.5px', width: '300px'}}>
            <h3 className="product__title">{props.product.name}</h3>
            <img height='200px' src={props.product.image} alt={props.product.name} className="product__image"/>
            <div className="product__price-button-container">
                <div className="product__price">${props.product.price.toFixed(2)}US</div>
                <p className="product__description">{props.product.description}</p>
                {open?<ContactUsForm harp={props.product.name} reset={reset}/>:<button className="detailButton" onClick={() => setOpen(true)}>Ask Tisha about this harp</button>}
            </div>
        </div>
    )
}

export default withRouter(Product_Harp)
