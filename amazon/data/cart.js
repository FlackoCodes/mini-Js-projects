export const cart = [

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

