import React from 'react';
import "./checkout.scss";
import { connect } from 'react-redux';
import { removeCartItem } from '../../redux/actions/cart-actions';

function CheckoutItem({cartItem,clearCartItem}) {
    const {name,imageUrl,quantity,price} = cartItem;
    return (
        <div className ="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button"
            onClick ={()=>clearCartItem(cartItem)}
            >&#10005;</div>
        </div>
    )
}

const mapDispatchtoProps = (dispatch) =>({
    clearCartItem: (item) =>dispatch(removeCartItem(item))
})

export default connect(null,mapDispatchtoProps)(CheckoutItem)
