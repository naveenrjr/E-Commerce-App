import React from 'react';
import './checkout.scss';
import {createStructuredSelector} from 'reselect';
import {  connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/reducers/cartSelector';
import CheckoutItem from '../checkout-item/checkout';

function Checkout({cartItems,cartTotal}) {
    console.log("citems",cartItems);
    console.log("total",cartTotal)
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className = "header-block">
                    <span>Product</span> 
                </div>
                <div className = "header-block">
                    <span>Description</span> 
                </div>
                <div className = "header-block">
                    <span>Quantity</span> 
                </div>
                <div className = "header-block">
                    <span>Price</span> 
                </div>
                <div className = "header-block">
                    <span>Remove</span> 
                </div>
            </div>
            {cartItems&& cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}

            <div className="total">
            <span>Total: ${cartTotal}</span>
            </div>
        </div>
    )
}
const mapStatetProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal : selectCartTotal
})
export default connect(mapStatetProps)(Checkout)
