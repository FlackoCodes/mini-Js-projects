export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2,
    }
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
