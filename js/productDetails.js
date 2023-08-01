let detailsDom=document.querySelector(".Details")
let products=JSON.parse(localStorage.getItem("products"))


function drawProductDetailsUi() {
    let id=JSON.parse(localStorage.getItem("ID"))
    let product=products.find(item=>item.id===id)

    detailsDom.innerHTML=`
    <img src="${product.imageUrl}">
    <h3>${product.title}</h3>
    <p > ${product.desc}</p>
    <button class="edit-btn" style="display:${username && product.isMe?"inline-block":"none"}" onclick="saveIdEdit(${product.id})">edit product</button>
    `
}

drawProductDetailsUi()

// save product id for editProduct page


function saveIdEdit(id){
    localStorage.setItem("editID",id)
    window.location="editProduct.html"
}