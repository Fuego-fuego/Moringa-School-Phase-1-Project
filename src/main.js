

document.addEventListener('DOMContentLoaded', event =>{
/* Render Products to the DOM */
menClothing();
womenClothing();
jewelry();

})


/* DOM render functionalities
1.Create Card Render function.
2.GET all products to and pass in each to the card render function
*/
/* mens clothing renderer function*/
function menClothingRenderer(cloth){
    // Get list where product is to be added
    const productList = document.querySelector('#product-wrapper1');
    // Create list item
    const li = document.createElement('li');
    // Add class name for stylings
    li.classList = 'card flex-column'
    // Add card inner html
    li.innerHTML = `
    <img class = "product-img" src="${cloth.image}" alt="product image">
    <div class="product-details">
        <p class="product-name fs-tertiary-heading fw-bold">${cloth.title}</p>
        <p class="product-price fw-semi-bold bg-">${Math.ceil(cloth.price) * 50}.ksh</p>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis quae illum? Facilis, animi
            esse illum ad sunt iusto nesciunt?</p>
        <button class="btn card-btn uppercase fw-semi-bold">add to cart</button>
        </div>

    `
    // Append card to the product list
    productList.appendChild(li);

}
/* women's renderer function*/
function womenClothingRenderer(cloth){
    // Get list where product is to be added
    const productList = document.querySelector('#product-wrapper2');
    // Create list item
    const li = document.createElement('li');
    // Add class name for stylings
    li.classList = 'card flex-column'
    // Add card inner html
    li.innerHTML = `
    <img class = "product-img" src="${cloth.image}" alt="product image">
    <div class="product-details">
        <p class="product-name fs-tertiary-heading fw-bold">${cloth.title}</p>
        <p class="product-price fw-semi-bold bg-">${Math.ceil(cloth.price) * 50}.ksh</p>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis quae illum? Facilis, animi
            esse illum ad sunt iusto nesciunt?</p>
        <button class="btn card-btn uppercase fw-semi-bold">add to cart</button>
</div>

    `
    // Append card to the product list
    productList.appendChild(li);

}
/* jewelry renderer function*/
function jewelryRenderer(jewel){
    // Get list where product is to be added
    const productList = document.querySelector('#product-wrapper3');
    // Create list item
    const li = document.createElement('li');
    // Add class name for stylings
    li.classList = 'card flex-column'
    // Add card inner html
    li.innerHTML = `
    <img class = "product-img" src="${jewel.image}" alt="product image">
    <div class="product-details">
        <p class="product-name fs-tertiary-heading fw-bold">${jewel.title}</p>
        <p class="product-price fw-semi-bold bg-">${Math.ceil(jewel.price) * 50}.ksh</p>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis quae illum? Facilis, animi
            esse illum ad sunt iusto nesciunt?</p>
        <button class="btn card-btn uppercase fw-semi-bold">add to cart</button>
</div>

    `
    // Append card to the product list
    productList.appendChild(li);

}

/* GET all products */
/* men's clothing */
function menClothing () {
    
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then(res=>res.json())
    .then(menVouge => menVouge.forEach(item => menClothingRenderer(item)))
    .catch(e => console.log(e.message));
}

/* women's clothing */
function womenClothing () {
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
    .then(res=>res.json())
    .then(womenVouge=> womenVouge.forEach(item => womenClothingRenderer(item)))
    .catch(e => console.log(e.message));
}
/* jewelry */
function jewelry () {
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=3')
    .then(res=>res.json())
    .then(jewels=>jewels.forEach(jewel => jewelryRenderer(jewel)))
    .catch(e => console.log(e.message));

}