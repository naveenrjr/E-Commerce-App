import React from 'react';
import "./checkout.scss";
import { connect } from 'react-redux';
import { removeCartItem, decreaseItem, addItemtoCart } from '../../redux/actions/cart-actions';

function CheckoutItem({cartItem,clearCartItem,decreaseCartItem,increaseCartItem}) {
    const {name,imageUrl,quantity,price} = cartItem;
    return (
        <div className ="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow"
                onClick={()=>decreaseCartItem(cartItem)}

                >
                    &#10094;
                </div>
                    <span className="value">{quantity}</span>
                <div className="arrow"
                onClick = {()=>increaseCartItem(cartItem)}
                
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button"
            onClick ={()=>clearCartItem(cartItem)}
            >&#10005;</div>
        </div>
    )
}

const mapDispatchtoProps = (dispatch) =>({
    clearCartItem: (item) =>dispatch(removeCartItem(item)),
    decreaseCartItem: (item) => dispatch(decreaseItem(item)),
    increaseCartItem:(item) => dispatch(addItemtoCart(item))
})

export default connect(null,mapDispatchtoProps)(CheckoutItem)
