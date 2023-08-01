//variables 

let usernameDom=document.querySelector("input:first-child")
let emailDom=document.querySelector("input:nth-child(2)")
let inputFile=document.querySelector("input[type=file]")
let editBtn=document.querySelector("input[type=submit]")

// get data from localstorage
let email=localStorage.getItem("email")

//change value of input 
usernameDom.value=username
emailDom.value=email

// event on editBtn for update profile
editBtn.addEventListener("click",editProfile)


// update profile function 
function editProfile(e) {
      e.preventDefault()

     
      let [file]= inputFile.files
      
    if(usernameDom.value && emailDom.value){
        
       if(inputFile.files.length){
        
                    let fr=new FileReader()
                    fr.readAsDataURL(file)
                    fr.addEventListener("load",function(){
                
                    localStorage.setItem("src",fr.result)
                    localStorage.setItem("username",usernameDom.value)
                    localStorage.setItem("email",emailDom.value)

                    window.location="profile.html"
                    })        
       }else {
                    localStorage.setItem("username",usernameDom.value)
                    localStorage.setItem("email",emailDom.value)
                    window.location="profile.html"
       }
        
               
       
        
        
        
      
    }else{
        alert("enter all data")
    }

}