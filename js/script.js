




let productsDom=document.querySelector(".products")
// create a fuction to draw products ui
function drawProductsUi(items) {
    if(items.length){
        let productsUi=items.map(item=>{
            return `<div class="product-item">
            <img src="${item.imageUrl}" class="product-item-img"  alt="lap">
            <div class="product-item-info">
                <h2 class="title" onclick="saveId(${item.id})">${item.title}</h2> 
                <span style="color:red">${item.type}</span>
                </div>
                <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${item.id})">add to cart</button> 
            
                <i class="add-to-favorite ${item.like?"fa fa-heart":"fa fa-heart-o"}" style="color:${item.like?"red":"black"}"  onclick="addedToFavorite(${item.id})"></i>
    
            </div>
        </div>   `
        })
        productsDom.innerHTML=productsUi.join("")
    }else {
        productsDom.innerHTML=`<h2>No products</h2>`
    }
  
    

}



if(localStorage.getItem("products")){
    products=JSON.parse(localStorage.getItem("products"))
}else{
    localStorage.setItem("products",JSON.stringify(products)) 
}

const number=2
let k=0
let itemsNumber
let paginationProducts=[]

if(products.length){

    itemsNumber=Math.ceil(products.length/number)
    
    for (let i = 0; i < itemsNumber ; i++) {
        
        paginationProducts=[...paginationProducts,products.slice(i+k,i+k+2)]
        k++
        
    }

    drawProductsUi(paginationProducts[0])
}else{
    drawProductsUi(products)
}

//create Add to Cart function 
function addedToCart(id) {
    if(username){
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
        cartProductsItemsDom.innerHTML+=`<p>${el.title} <span>${el.qty}</span></p>`
    });
    
    badgeDom.innerHTML=addedItems.length
    badgeDom.style.display="block" 
   }else{
        window.location="register.html"
   }
}
//create Add To Favorite function

function addedToFavorite(id){
    if(username){
    let clickedItem=products.find(el=>el.id===id)
    
    
    if(clickedItem.like){
        clickedItem.like=false
        
    }
    else{
        clickedItem.like=true
        
    }
    localStorage.setItem("products",JSON.stringify(products)) 
    

    drawProductsUi(products)
  }else{
    window.location="register.html"
  }
    
}


// draw filtred products ui 
let filtredProducts
function drawFiltredUi(key,value){
    
    filtredProducts=products.filter(product=>product[key]===value)
    drawProductsUi(filtredProducts)
    
}


// search by category and type 

let selectTypeDom=document.querySelector(".home .select-type")
let selectcategoryDom=document.querySelector(".home .select-category")

selectcategoryDom.addEventListener("change",(e)=>{
    
    
    drawFiltredUi("category",e.target.value)
    
    let types=filtredProducts.map(product=>product.type)
    .reduce((acc,type)=>acc.includes(type) ? acc:[...acc,type],[])

    selectTypeDom.innerHTML=` <option hidden>search by type</option> `
    
    types.map(type=>selectTypeDom.innerHTML+=`<option>${type}</option>`)
    selectTypeDom.removeAttribute("disabled")
    selectTypeDom.addEventListener("change",(e)=>{
        drawFiltredUi("type",e.target.value)
        
    })

})

// save product id for productDetails page
function saveId(id){
    localStorage.setItem("ID",id)
    window.location="productDetails.html"
}




// Show Hide create product link
let createLinkDom=document.querySelector(".home .create-product")
function displayCreateProductLink(){
    if(username){
    createLinkDom.style.display="block"
    }
}


displayCreateProductLink()

//pagination
let paginationDom=document.querySelector(".pagination")



for(let i=1;i<=itemsNumber;i++){
    paginationDom.innerHTML+=`<li onclick="changeDisplay(${i})">${i}</li>`
}

function changeDisplay(num){
   
    drawProductsUi(paginationProducts[num-1])
}


