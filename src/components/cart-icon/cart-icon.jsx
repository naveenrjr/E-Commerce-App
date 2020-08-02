import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.scss';
import {toggleCartHidden} from '../../redux/actions/cart-actions'


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden, itemCount}) =>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = ({cart :{cartItems}}) => {
    console.log("iam being called");
    return ({
        itemCount: cartItems.reduce((acc,cartItem)=>acc+cartItem.quantity,0)
    })
}
const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden :()=> dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);