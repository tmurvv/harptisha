import {withRouter} from 'next/router'

const Product = (props) => {
    return (
        <div className="product" style={{margin: '7.5px', width: '300px'}}>
            <h3 className="product__title">{props.product.name}</h3>
            <img height='200px' src={props.product.image} alt={props.product.name} className="product__image"/>
            <div className="product__price-button-container">
                <div className="product__price">${props.product.price.toFixed(2)}US</div>
                <button 
                    className="snipcart-add-item product__button"
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={props.router.pathname}
                    data-item-image={props.product.image}>
                    Add to cart
                </button>
                <p className="product__description">{props.product.description}</p>
            </div>
        </div>
    )
}

export default withRouter(Product)
