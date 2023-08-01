let cartProductsItemsDom=document.querySelector(".cart-products .items")
let badgeDom=document.querySelector(".cart-badge")



let addedItems=[]

if(localStorage.getItem("productsInCart")){
    addedItems=JSON.parse(localStorage.getItem("productsInCart"))
 
    if(addedItems.length){
        
        addedItems.forEach(el=>cartProductsItemsDom.innerHTML+=`<p>${el.title} <span>${el.qty}</span></p>`)
        badgeDom.innerHTML=addedItems.length 
        badgeDom.style.display="block"
        
    }else{
        badgeDom.style.display="none"
    }
    

}


let cartIcon=document.querySelector(".cart-icon")
let cartProductsDom=document.querySelector(".cart-products")

//open Cart Menu
cartIcon.addEventListener("click",openCartMenu)
function openCartMenu() {
    if(cartProductsItemsDom.innerHTML){
        if(cartProductsDom.style.display=="block"){
            cartProductsDom.style.display="none"
        }else{
            cartProductsDom.style.display="block"
        }
        
    }

}

