let productsDom=document.querySelector(".products")
let productsInCart=JSON.parse(localStorage.getItem("productsInCart"))

// Display products in Cart 

function drawProductsUi() {
    if(productsInCart.length!=0){
    let productsUi=productsInCart.map(item=>{
        return `<div class="product-item">
        <img src="${item.imageUrl}" class="product-item-img"  alt="lap">
        <div class="product-item-info">
            <h2 class="title">${item.title}</h2>
            <p class="desc">
            ${item.desc}
            </p>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" onclick="removeFromCart(${item.id})">remove</button> 
            

        </div>
    </div>   `
    })
    productsDom.innerHTML=productsUi.join("")
 }else{
    productsDom.innerHTML="<h2>No products</h2>"
 }
}

drawProductsUi()

// remove product from Cart 




function removeFromCart(id) {
   productsInCart=productsInCart.filter(item=>item.id!=id)
   localStorage.setItem("productsInCart",JSON.stringify(productsInCart))
   
   drawProductsUi()
   cartProductsItemsDom.innerHTML=""
   
    if(productsInCart.length ){

        productsInCart.forEach(el => {
            cartProductsItemsDom.innerHTML+=`<p>${el.title} ${el.qty}</p>`
        })
         
        badgeDom.innerHTML=productsInCart.length
        badgeDom.style.display="block" 
    }else{
        badgeDom.style.display="none" 
        cartProductsDom.style.display="none"
    }
    

}

    
