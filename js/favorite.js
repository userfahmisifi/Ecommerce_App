let productsDom=document.querySelector(".products")

let products=JSON.parse(localStorage.getItem("products"))

function drawFovoritesProductsUi(){
    favoritesProducts=products.filter(item=>item.like)
    if(favoritesProducts.length!=0){
    productsUi=favoritesProducts.map(item=>`
        <div class="product-item">
                <img src="${item.imageUrl}" class="product-item-img"  alt="">
                <div class="product-item-info">
                    <h2 class="title">${item.title}</h2>
                    <p class="desc">${item.desc}</p>

                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeFavorite(${item.id})">remove</button> 

                </div>
         </div>  
       `)
       productsDom.innerHTML=productsUi.join("")
    }else{
        productsDom.innerHTML="<h2>No products</h2>"
    }
}
drawFovoritesProductsUi()

function removeFavorite(id) {
    products.find(el=>el.id===id).like=false
    localStorage.setItem("products",JSON.stringify(products))
    
    drawFovoritesProductsUi()
    
    let arr=document.querySelectorAll(".product-item")
    if(arr.length===0){
       productsDom.innerHTML="<h2>No products</h2>"

    }
}