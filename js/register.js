//Register User

let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let registerBtn=document.getElementById("signup")

registerBtn.addEventListener("click",register)

function register(e){
   e.preventDefault()
   if (username.value===""||email.value===""||password.value==="") {
      alert("fill all data")
   } else {
      localStorage.setItem("username",username.value)
      localStorage.setItem("email",email.value)
      localStorage.setItem("password",password.value)
      setTimeout(() => {
           window.location="login.html"   
      },2000);
   }
}