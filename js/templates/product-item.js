export const item = (product) => {

  return `
    <li class="item" data-aos="fade-up">
      
  <div class="product__block js_product glass glass-m" id="${product.id}">
  
    <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price">
      $${(product.price).toFixed(2)}
      </span>
      <a href="product-page.html?id=${product.id}" class="product__btn product__btn--first">product details</a>
      <button class="product__btn js_add-to-cart">add to cart</button>
</div>

  </li>
    `
}


