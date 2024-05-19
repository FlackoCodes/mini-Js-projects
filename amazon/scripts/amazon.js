import { products } from "../data/products.js";
import { cart, addToCart } from "../data/cart.js";

let productsHtml = ""
let allProducts = document.querySelector('.products-grid');


products.forEach(product => {
    productsHtml += `<div class=
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
            src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
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
        data-product-name="${product.name}"
        >
        Add to Cart
        </button>
        </div>`
});

// data attribute in HTMl, used to store extra information for js manipulation.
allProducts.innerHTML = productsHtml;


const addToCartButton = document.querySelectorAll('.button-primary');

const cartItemContainer = document.querySelectorAll('.cart-item-container');

const carQuantity = document.querySelector('.cart-quantity');


const increaseCartQuantity = ()=>{
    let cartTotal = parseInt(carQuantity.textContent);
    cartTotal ++;
    carQuantity.textContent = cartTotal;
}


// dataset used to get all the data attributes that are assigned to a tag

addToCartButton.forEach((button) =>{
    button.addEventListener('click', ()=>{
        let productName = button.dataset.productName;
        let productId = button.dataset.productId;

        addToCart(productId, productName)
        increaseCartQuantity()
        console.log(cart);
    })
}
)

/* adding to cart functionality 
-- add to cart if the product is not already in the cart
-- else if product is in the cart, increas its quantity.
*/
