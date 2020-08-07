import { useContext } from 'react';
import uuid from 'react-uuid';
import Router, { withRouter } from 'next/router';

import { CartContext } from '../contexts/CartContext';
import { CartOpenContext } from '../contexts/CartOpenContext';
import { branding } from '../constants/branding';
import { cssVariables } from '../constants/cssVariables';
import CartCss from '../styles/cart.css';
import {
    getNumItems,
    getSubTotal,
    incQty,
    decQty,
    deleteItem
} from '../utils/helpers';


function Cart(props) {
    const { cart, setCart } = useContext(CartContext);
    const { cartOpen, setCartOpen } = useContext(CartOpenContext);
    if (cartOpen) {
    return (
        <>
           <div id='cart'>
                <img src='img/close.png' style={{width: '15px', height: '15px', margin: '10px'}} alt='close window' onClick={()=>setCartOpen(false)} />
                <div className='items'>
                <h1>Shopping Cart</h1>
                    <ul>
                        {cart.length===0?
                            <li key={uuid()}>"No Items in Cart"</li>
                        :cart.map(item => 
                            <li key={uuid()}>
                                <div className='item'>
                                    <div className='product_image'><img src={item.product_image} /></div>
                                    <div className='description'>
                                        <h1>{item.description}</h1>
                                        <h2>In Stock - Ships Immediately</h2>
                                        <button 
                                            onClick={e => deleteItem(e, cart, setCart)} 
                                            dataid={item.id}
                                            style={{
                                                background: 'tomato',
                                                padding: '3px 7px',
                                                fontSize: '12px'
                                            }}
                                        >
                                            delete
                                        </button>
                                    </div>
                                    <div className='product_quantity'>
                                        <div className='quantity_button'>
                                            <div className='how_many'>{item.product_quantity}</div>
                                            <div className='add_sub'>
                                                <div className='add' onClick={(e) => incQty(e, cart, setCart)} data-item-name={item.description}>+</div>
                                                <div className='sub' onClick={(e) => decQty(e, cart, setCart)} data-item-name={item.description}>-</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='price'>${(item.price*item.product_quantity).toFixed(2)}</div>	
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='subTotal'>
                    <h1>Subtotal</h1>
                    <h2>{getNumItems(cart)} Items</h2>
                    <h3>${getSubTotal(cart).toFixed(2)}</h3>
                    <h4>Shipping and Tax <br/> calculated at checkout. </h4>
                    
                    <button 
                        onClick={()=>{setCartOpen(false);Router.push('/Checkout');}}
                    >
                        Checkout
                    </button>
                    <form style={{
                        width: 'fit-content',
                        paddingTop: '20px',
                        margin: 'auto',
                        boxShadow: 'none',
                        borderRadius: 'none'
                    }}>
                        <input type='checkbox' style={{margin: '0'}}/>This is a Gift
                    </form>
                </div>
                <CartCss />
            </div>
            </>)
        } else {
            return (
                <>
                <div className='cartButton' onClick={()=>setCartOpen(true)}>
                        <p>{getNumItems(cart)}</p>
                    <img 
                        src='img/shoppingCart.png' 
                        onClick={()=>setCartOpen(true)} 
                        alt='shopping cart'
                    />
                </div>
                
                <CartCss />
                </>
                )
        }         
}

export default Cart;
