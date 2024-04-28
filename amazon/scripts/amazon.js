import { cart, addTocart } from "../data/cart.js";
import { products } from "../data/products.js"


let allHtml = ""


products.forEach(product => {
    let html = `
    <div class=
        "product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div> 

        <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            $${parseFloat(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary" data-product-id="${product.id}"
        data-product-price="${(product.priceCents / 100).toFixed(2)}" 
        >
            Add to Cart
        </button>
    </div>
    `
    allHtml += html
});


let productGrid = document.querySelector('.products-grid');
productGrid.innerHTML = allHtml;

// adding to cart functionality

const addToCartButton = document.querySelectorAll('.button-primary')

// const increaseCartNumber = ()=>{
//     const cartTotal = document.querySelector('.cart-quantity');
//     let cartNum = Number(cart.textContent)
//     cartNum++
//     cart.textContent = cartNum
// }

addToCartButton.forEach(button => {
    button.addEventListener('click', () => {
       const productId = button.dataset.productId;
       const productPrice = button.dataset.productPrice;

        // checking if the product clicked is already in the cart


        let matchingItem;

        cart.forEach(item => {
            if (productId === item.productId) {
                matchingItem = item;
            } 
        });

        if (matchingItem) {
            matchingItem.quantity ++;
        } else{
            cart.push({productId: productId,
                quantity: 1,
            })
        }

       addTocart()
       
    })
});
