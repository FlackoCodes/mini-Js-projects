export let cart = [
    {
        productID: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 3
    },
    {
        productID: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3
    }
]

export const addTocart =() =>{
     // updating cart quantity

     const cartTotal = document.querySelector('.cart-quantity');

     let cartQuantity = 0;

     cart.forEach(item => {
        let quantity = item.quantity
        cartQuantity += quantity
     });
     cartTotal.textContent = cartQuantity;
}

export const removeFromCart = (productID)=>{
        const newCart = cart.filter((element) => element.productID !== productID);
        cart = newCart;
        const cartLink = document.querySelector('.cart-item-container')
        cartLink.remove()
}
