let products=JSON.parse(localStorage.getItem("products"))

let editBtn=document.querySelector("input[type=submit]")
let nameDom=document.querySelector("input:first-child")
let descDom=document.querySelector("input:nth-child(4)")
let inputFile=document.querySelector("input[type=file]")
let typeDom=document.querySelector("input:nth-child(5)")


let product=products.find(item=>item.id===JSON.parse(localStorage.getItem("editID")))

nameDom.value=product.title
descDom.value=product.desc
typeDom.value=product.type

editBtn.addEventListener("click",editProduct)


function editProduct(e) {
    e.preventDefault()

    let name=nameDom.value
    let desc=descDom.value
    let type=typeDom.value
    let [file]=inputFile.files
    
    if (name && desc && type){

        product.title=name
        product.desc=desc
        product.type=type
        
        if(inputFile.files.length){
        let fr=new FileReader()
        fr.readAsDataURL(file)
        
        fr.addEventListener("load",function () {
            
            product.imageUrl=fr.result
            localStorage.setItem("products",JSON.stringify(products))
            window.location="index.html"
            
        })
      }else{
            localStorage.setItem("products",JSON.stringify(products))
             
             window.location="index.html"
      }
         
    } else {
        alert("enter data")
    }
}