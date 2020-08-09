export const addToCart = (cartItems,cartItemtoAdd) =>{
    const existingCartItem = cartItems.find(cartItem=> cartItem.id === cartItemtoAdd.id)

    if(existingCartItem){
        return cartItems.map(cartItem=>

            cartItem.id ===cartItemtoAdd.id? {...cartItem, quantity:cartItem.quantity+1}:cartItem
        
        )
    }
    return [...cartItems,{...cartItemtoAdd,quantity:1}]


}

export const removeFromCart = (cartItems,cartItemtoRemove) => {
    const itemtoRemove = cartItems.find(cartItem=> cartItem.id ===cartItemtoRemove.id)

    if(itemtoRemove.quantity>1){
        return cartItems.map(cartItem => cartItem.id ===cartItemtoRemove.id ? {...cartItem,quantity:cartItem.quantity-1}:cartItem)
    }
    else{
        return cartItems.filter(cartItem=>cartItem.id !== cartItemtoRemove.id)
    }
}