
let cartProductsItemsDom=document.querySelector(".cart-products .items")
let badgeDom=document.querySelector(".cart-badge")



let addedItems=[]

if(localStorage.getItem("productsInCart")){
    addedItems=JSON.parse(localStorage.getItem("productsInCart"))
    
    addedItems.forEach(el=>cartProductsItemsDom.innerHTML+=`<p>${el.title} ${el.qty}</p>`)

    badgeDom.innerHTML=addedItems.length
    badgeDom.style.display="block" 

}


//Add to Cart
function addedToCart(id) {
    let clickedItem=products.find(el=>el.id===id)
    
    if(addedItems.some(item=>item.id===id)){ 
        
        addedItems.find(el=>el.id===id).qty+=1
        localStorage.setItem("productsInCart",JSON.stringify(addedItems))
    }
    else{
        clickedItem.qty=1
        addedItems.push(clickedItem)
        localStorage.setItem("productsInCart",JSON.stringify(addedItems))
    }
    
    cartProductsItemsDom.innerHTML=""
    
    addedItems.forEach(el => {
        cartProductsItemsDom.innerHTML+=`<p>${el.title} ${el.qty}</p>`
    });
    
    badgeDom.innerHTML=addedItems.length
    badgeDom.style.display="block" 
      
}

let cartIcon=document.querySelector(".cart-icon")
let cartProductsDom=document.querySelector(".cart-products")


cartIcon.addEventListener("click",openCartMenu)
//open Cart Menu
function openCartMenu() {
    if(cartProductsItemsDom.innerHTML!=""){
        if(cartProductsDom.style.display=="block"){
            cartProductsDom.style.display="none"
        }else{
            cartProductsDom.style.display="block"
        }
        
    }
   

}

