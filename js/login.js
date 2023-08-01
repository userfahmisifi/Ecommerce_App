let username=document.getElementById("username")
let password=document.getElementById("password")
let login_btn=document.getElementById("signin")
let getUser=localStorage.getItem("username")
let getPassword=localStorage.getItem("password")


login_btn.addEventListener("click",login)

function login(e){
   e.preventDefault()
   if (username.value===""||password.value==="") {
      alert("fill all data")
   } else {
      if(getUser===username.value && getPassword===password.value){
        setTimeout(() => {
         window.location="index.html"
        },2000);
      }else{
         window.location="register.html"
      }
   }
}