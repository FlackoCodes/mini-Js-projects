export const cart = [

]

export const addToCart = (productId, productName)=>{
    let matchingCartItem;

    cart.forEach((cartItem) =>{
        if (productId === cartItem.productId) {
            matchingCartItem = cartItem;
        }
    })

    if (!matchingCartItem) {
        cart.push({
            productId,
            productName,
            quantity: 1,
        })
    } else{
        matchingCartItem.quantity ++;
    }
    
}
