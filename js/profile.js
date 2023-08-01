let email=localStorage.getItem("email")
let products=JSON.parse(localStorage.getItem("products"))
let number=products.filter(item=>item.isMe).length
let img=document.querySelector("img")

let usernameDom=document.querySelector(".profile .username")
let emailDom=document.querySelector(".profile .email")
let numberDom=document.querySelector(".profile .products-number span")
let editBtn=document.querySelector(".profile-edit")


editBtn.addEventListener("click",function(){
    window.location="editProfile.html"
})


usernameDom.innerHTML=username
emailDom.innerHTML=email
numberDom.innerHTML=number
if(localStorage.getItem("src")){

    img.setAttribute("src",localStorage.getItem("src"))
}