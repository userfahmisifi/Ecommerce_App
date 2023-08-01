// get data from localestorage 
let products=JSON.parse(localStorage.getItem("products"))




//variables 
let createBtn=document.querySelector("input[type=submit]")
let nameDom=document.querySelector("input:first-child")
let descDom=document.querySelector("input:nth-child(4)")
let inputFile=document.querySelector("input[type=file]")
let selectTypeDom=document.querySelector(".select-type")
let typeDom=document.querySelector("input:nth-child(6)")
// event on createBtn to add a product 
createBtn.addEventListener("click",addProduct)


// add a product function 
function addProduct(e){
    e.preventDefault()
    
    let name=nameDom.value
    let desc=descDom.value
    let category=selectTypeDom.value
    let type=typeDom.value
    let [file]=inputFile.files
  

    if (name && desc && category!="select type" && type && inputFile.files.length) {
        

        let fr=new FileReader()
        fr.readAsDataURL(file)
        
        fr.addEventListener("load",function () {
            products.push({
                id:products.length+1,
                title:name,
                desc:desc,
                isMe:true,
                category,
                type,
                imageUrl:fr.result
             })
    
            localStorage.setItem("products",JSON.stringify(products))
            window.location="index.html" 
            
        })
        
          
    } else {
        alert("enter data")
    }

}




