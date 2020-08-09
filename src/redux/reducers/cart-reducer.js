import CartActionTypes from "../actions/cart-action-types"
import { addToCart } from "../helpers/cart.utils"


const INITIAL_STATE = {
    hidden: true ,
    cartItems:[]
}

const CartReducer = (state=INITIAL_STATE,{type,payload}) =>{
    switch(type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addToCart(state.cartItems,payload)
                
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter((item)=>item.id !== payload.id)
            }
        
        default:
            return state

            
    }
}

export default CartReducer;