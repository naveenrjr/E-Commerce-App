import CartActionTypes from './cart-action-types';

export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemtoCart = (item) =>({
    type:CartActionTypes.ADD_ITEM,
    payload:item,
})

export const removeCartItem = (item) =>({
    type:CartActionTypes.REMOVE_CART_ITEM,
    payload:item,
});

