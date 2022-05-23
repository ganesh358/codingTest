document.querySelector("#add_more_product").addEventListener("click", myfun);

function myfun(){
    window.location.href = "index.html"
}


var Data = JSON.parse(localStorage.getItem("products"));

console.log("data :",Data);

Data.map(function (el,index){
    var div = document.createElement("div");

    var image1 = document.createElement("img");
    image1.src = el.image;
    
    var type1 = document.createElement("p");
    type1.innerText = el.type;

    var desc1 = document.createElement("p");
    desc1.innerText = el.desc;

    var price1 = document.createElement("p");
    price1.innerText = el.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove Product";
    btn.setAttribute("id","remove_product");
    btn.addEventListener("click",function(){
           removeProduct(el,index);
    })

    div.append(image1 , type1, desc1, price1,btn);

    document.querySelector("#all_products").append(div);
})

   function removeProduct(el,index){
    Data.splice(index, 1);

    localStorage.setItem("products",JSON.stringify(Data));

    window.location.reload();
   }