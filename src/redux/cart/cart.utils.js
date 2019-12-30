export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ?
            { ...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
}

export const decreaseItemCountFromCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id)

    if (existingCartItem.quantity === 1) 
        return removeItemFromCart(cartItems, cartItemToDecrease);
    
    return cartItems.map(cartItem => {
        if (cartItem.id === cartItemToDecrease.id)
            return {
                ...cartItem,
                quantity: cartItem.quantity - 1
            }
        return cartItem;
    })
}