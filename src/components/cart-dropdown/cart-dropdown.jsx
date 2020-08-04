import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/reducers/cartSelector';
import { createStructuredSelector } from 'reselect';


const  CartDropdown = React.memo( ({cartItems}) => {
// const {cartItems= []} =  useSelector(cart => cart.cartItems)

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems && 
                    cartItems.map(cartItem =><CartItem key={cartItem.id} item = {cartItem}/>)}
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
});

const mapStateToProps = createStructuredSelector({
    cartItems :selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);
