import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/reducers/cartSelector';
import { createStructuredSelector } from 'reselect';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/actions/cart-actions';



const  CartDropdown = React.memo( ({cartItems,history,dispatch}) => {
// const {cartItems= []} =  useSelector(cart => cart.cartItems)

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length?  
                    cartItems.map(cartItem =><CartItem key={cartItem.id} item = {cartItem}/>)
                    :<span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=>{
                history.push("/checkout")
                dispatch(toggleCartHidden())
                }}>
                    {cartItems.length? `Go To Checkout`:`Add items`}
            </CustomButton>
        </div>
    )
});

const mapStateToProps = createStructuredSelector({
    cartItems :selectCartItems
})
export default compose(withRouter,connect(mapStateToProps))(CartDropdown);
