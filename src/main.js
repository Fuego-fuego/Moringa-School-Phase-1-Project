document.addEventListener('DOMContentLoaded', event => {
    /* Render Products to the DOM */
    menClothing();
    womenClothing();
    jewelry();
    localServerRender();
    


    /* Make Cart visible */
    // Get cart icon
    const cartIcon = document.querySelector('#cartWrapper');
    // Add event listener to remove hider class from cart on click
    cartIcon.addEventListener('click', e => {
        const cart = document.querySelector('#cart');
        // remove hider class
        cart.classList.remove('hide-cart');
    });

    /* Hide Cart */
    // Get cart close icon
    const cartCloseIcon = document.querySelector('#cart-close-btn');
    // Add event listener to add hide class to cart
    cartCloseIcon.addEventListener('click', e => {
        const cart = document.querySelector('#cart');

        cart.classList.add('hide-cart');
    });

    



})


/* DOM render functionalities
1.Create Card Render function.
2.GET all products to and pass in each to the card render function
*/
/* mens clothing renderer function*/
function menClothingRenderer(cloth) {
    // Get list where product is to be added
    const productList = document.querySelector('#product-wrapper1');
    // Create list item
    const card = document.createElement('li');
    // Add class name for stylings
    card.classList = 'card flex-column'
    // Add card inner html
    card.innerHTML = `
    <img class = "product-img" src="${cloth.image}" alt="product image">
    <div class="product-details">
        <p class="product-name fs-tertiary-heading fw-bold">${cloth.title}</p>
        <p class="product-price fw-semi-bold bg-">${Math.ceil(cloth.price) * 50}.ksh</p>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis quae illum? Facilis, animi
            esse illum ad sunt iusto nesciunt?</p>
        <button id="addToCartBtn" class="btn card-btn uppercase fw-semi-bold">add to cart</button>
        </div>

    `;
    // Append card to the product list
    productList.appendChild(card);

    // Add product item to cart
    // Create Object to be added'
    let productObject = {

        image: cloth.image,
        name: cloth.title,
        price: `${Math.ceil(cloth.price) * 50}`,
        count: 1

    }
    const addToCartBtn = card.querySelector('#addToCartBtn');
    addToCartBtn.addEventListener('click', () => {

        addToCartDB(productObject);
        renderToCart(productObject);



    })

}
/* women's renderer function*/
function womenClothingRenderer(cloth) {
    // Get list where product is to be added
    const productList = document.querySelector('#product-wrapper2');
    // Create list item
    const card = document.createElement('li');
    // Add class name for stylings
    card.classList = 'card flex-column'
    // Add card inner html
    card.innerHTML = `
    <img class = "product-img" src="${cloth.image}" alt="product image">
    <div class="product-details">
        <p class="product-name fs-tertiary-heading fw-bold">${cloth.title}</p>
        <p class="product-price fw-semi-bold bg-">${Math.ceil(cloth.price) * 50}.ksh</p>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis quae illum? Facilis, animi
            esse illum ad sunt iusto nesciunt?</p>
        <button id="addToCartBtn" class="btn card-btn uppercase fw-semi-bold">add to cart</button>
</div>

    `
    // Append card to the product list
    productList.appendChild(card);

    // Add product item to cart
    // Create Object to be added'
    let productObject = {

        image: cloth.image,
        name: cloth.title,
        price: `${Math.ceil(cloth.price) * 50}`,
        count: 1

    }
    const addToCartBtn = card.querySelector('#addToCartBtn');
    addToCartBtn.addEventListener('click', () => {

        addToCartDB(productObject);
        renderToCart(productObject);



    })


}
/* jewelry renderer function*/
function jewelryRenderer(jewel) {
    // Get list where product is to be added
    const productList = document.querySelector('#product-wrapper3');
    // Create list item
    const card = document.createElement('li');
    // Add class name for stylings
    card.classList = 'card flex-column'
    // Add card inner html

    card.innerHTML = `
    <img class = "product-img jewel-product-image" src="${jewel.image}" alt="product image">
    <div class="product-details">
        <p class="product-name fs-tertiary-heading fw-bold">${jewel.title}</p>
        <p class="product-price fw-semi-bold bg-">${Math.ceil(jewel.price) * 50}.ksh</p>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis quae illum? Facilis, animi
            esse illum ad sunt iusto nesciunt?</p>
        <button id="addToCartBtn"  class="btn card-btn uppercase fw-semi-bold">add to cart</button>
</div>

    `
    // Append card to the product list
    productList.appendChild(card);

    // Add product item to cart
    // Create Object to be added'
    let productObject = {

        image: jewel.image,
        name: jewel.title,
        price: `${Math.ceil(jewel.price) * 50}`,
        count: 1

    }
    const addToCartBtn = card.querySelector('#addToCartBtn');
    addToCartBtn.addEventListener('click', () => {

        addToCartDB(productObject);
        renderToCart(productObject);



    })

}
// Initial render
function initialRender(){
localServerRender();
} 
/* Render Item to cart  */
function renderToCart(productObj) {
    const cartItem = document.createElement('li');
    cartItem.classList = 'cart-item flex';
    cartItem.innerHTML = `
 <img src="${productObj.image}" alt="cart item image" class="cart-item-img">
 <div class="cart-item-details flex-column">
     <p class="cart-item-name |fw-bold">${productObj.name}</p>
     <p class="total-price | fs-tertiary-heading fw-semi-bold capitalize"> items price : ${productObj.price * productObj.count}ksh</p>
     <div class="cart-item-number-wrapper">
         <span id="cartIncrementBtn" class="cart-item-add | cart-item-number-btn"> + </span>
         <span id='cartItemCount'class="cart-item-number">${productObj.count} </span>
         <span id = 'cartItemSubtractBtn' class="cart-item-subtract | cart-item-number-btn"> - </span>
     </div>
 </div>
 `;

// Delete btn 

const cartItemSubtractBtn = cartItem.querySelector('#cartItemSubtractBtn');

cartItemSubtractBtn.addEventListener('click', () =>{
    cartItem.remove()
    deleteProductFromCart(cartItem.id);
    
});




    const cartItems = document.querySelector('#cartItems');

    cartItems.appendChild(cartItem);
}

/* GET all products */
/* men's clothing */
function menClothing() {

    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
        .then(res => res.json())
        .then(menVouge => menVouge.forEach(item => menClothingRenderer(item)))
        .catch(e => console.log(e.message));
}

/* women's clothing */
function womenClothing() {
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
        .then(res => res.json())
        .then(womenVouge => womenVouge.forEach(item => womenClothingRenderer(item)))
        .catch(e => console.log(e.message));
}
/* jewelry */
function jewelry() {
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=3')
        .then(res => res.json())
        .then(jewels => jewels.forEach(jewel => jewelryRenderer(jewel)))
        .catch(e => console.log(e.message));

}

// Render Products from cart 
function localServerRender() {
    fetch(`http://localhost:3000/cart`)
        .then(res => res.json())
        .then(products => products.forEach(product => renderToCart(product)));
}

// POST product to json server 
function addToCartDB(productObject) {
    fetch(`http://localhost:3000/cart`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productObject)
    })

}
// Update product count on json server
function updateProduct(productObj) {
    fetch(`http://localhost:3000/animals/${productObj.id}`, {
        method: "PATCH",
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(animalObj)
    })

}


// DELETE product from json server
function deleteProductFromCart(id) {
    fetch(`http://localhost:3000/cart/${id}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        }
    })
}


// Delete all
// Delete all f(x)
function deleteAll(){
    fetch(`http://localhost:3000/cart`)
        .then(res => res.json())
        .then(products => products.forEach(product => deleteProductFromCart(product.id)));

}

// Delete all attached to clear btn

const cartItemsClearAllBtn = document.querySelector('#cartItemsClearAllBtn');

cartItemsClearAllBtn.addEventListener('click',() =>{

    const cartList = document.querySelector('#cartItems');
    cartList.innerHTML = '';
    deleteAll();

});


// Increment
// const cartIncrementBtn = document.querySelector('#cartIncrementBtn');
// let cartItemCount = document.querySelector('#cartItemCount');

// cartIncrementBtn.addEventListener('click', () =>{    

//     productObj.count += 1;   
    
// })

// updateProduct(productObj);
// cartItemCount.innerHTML = productObj.count;