let userDom=document.querySelector("#username")
let nav_list=document.querySelector(".nav-list:first-child")
let navList=document.querySelector(".nav-list:nth-child(2)")
let logoutLink=document.getElementById("logout")
let username=localStorage.getItem("username")
logoutLink.addEventListener("click",function(){
    localStorage.clear()
})

if (username) {
    nav_list.style.display="none"
    userDom.innerHTML=username

} else{
    navList.style.display="none"
    
}
