import { cart, removeItemFromCart} from "../data/cart.js";
import { products } from "../data/products.js";
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import { deliveryOptions } from "../data/deliveryOptions.js"
const orderSummary = document.querySelector('.order-summary');


let cartSummaryHtml = '';

cart.forEach((cartItem) =>{
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) =>{
        if (productId === product.id){
            matchingProduct = product;
            console.log(matchingProduct);
        }
    })

        cartSummaryHtml += `<div class="cart-item-container
        js-cart-${matchingProduct.id}
        ">
        <div class="delivery-date">
        Delivery date: Tuesday, June 21
        </div>
        <div class="cart-item-details-grid">
         <img class="product-image"
         src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${(matchingProduct.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary" data-product-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>    
        ${deliveryOptionsHtml(matchingProduct)}
      </div>
    </div>
  </div>`
})

orderSummary.innerHTML = cartSummaryHtml;
console.log(cartSummaryHtml);


function deliveryOptionsHtml(matchingProduct) {
  let html = ""
  deliveryOptions.forEach((option) => {
    // get current date from dayjs
    const today = dayjs();
    const deliveryDate = today.add(
      option.deliveryDays,
      'days'
    );
    const formattedDate = deliveryDate.format(
      'dddd, MMMM D'
    );

    const priceString = option.priceCents
      === 0 ? 'FREE' : `$${(option.priceCents / 100).toFixed(2)}`;
    html +=
      `
      <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${formattedDate}
              </div>
              <div class="delivery-option-price">
                ${priceString} - Shipping
              </div>
            </div>
          </div>
    `;
  });

  return html;
}

const deleteLink = document.querySelectorAll('.link-primary');
deleteLink.forEach((link) =>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;
        removeItemFromCart(productId);

        const toDelete = document.querySelector(`.js-cart-${productId}`) // using the productid to get the correct container to remove
        console.log(cart);
        console.log(toDelete);
        toDelete.remove();
    })
})