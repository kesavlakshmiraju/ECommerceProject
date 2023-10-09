export const AddItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const ReduceQantity = (cartItems, ItemToReduce) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === ItemToReduce.id
    )
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== ItemToReduce.id
        )
    }
    return cartItems.map(
        cartItem => cartItem.id === ItemToReduce.id
            ? { ...cartItem , quantity : cartItem.quantity - 1 }
            : cartItem
    )
}
