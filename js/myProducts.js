let productsDom=document.querySelector(".products")
let products=JSON.parse(localStorage.getItem("products"))



function drawProductsUi() {
    if(products.filter(product=>product.isMe).length){
    let productsUi=products.filter(product=>product.isMe).map(item=>{
        return `<div class="product-item">
        <img src="${item.imageUrl}" class="product-item-img"  alt="lap">
        <div class="product-item-info">
            <h2 class="title">${item.title}</h2>
            <p class="desc">
            ${item.desc}
            </p>
        </div>
        <div class="product-item-actions" style="justify-content: flex-start">
        <button class="add-to-cart" onclick="removeFromMyProducts(${item.id})">remove</button> 
        <button class="add-to-cart" onclick="saveIdEdit(${item.id})">edit</button> 
            

        </div>
    </div>   `
    })
    productsDom.innerHTML=productsUi.join("")
   }else {

       productsDom.innerHTML=`<h2>No products</h2>`
   }
}

drawProductsUi()
// save product id for editProduct page

function saveIdEdit(id){
    localStorage.setItem("editID",id)
    window.location="editProduct.html"
}
// remove product from my Products

function removeFromMyProducts(id) {
    
    products=products.filter(product=>product.id!=id)
    
    
    localStorage.setItem("products",JSON.stringify(products))
    
    drawProductsUi()
 }
 