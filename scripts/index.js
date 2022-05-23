//store the products array in localstorage as "products"
document.querySelector("#show_products").addEventListener("click", myfun);

function myfun(){
    window.location.href = "inventory.html"
}

function Product(type,desc,price,image){
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}

var ProductData = JSON.parse(localStorage.getItem("products"))|| [];

function product1(e){
     e.preventDefault();

     let form = document.getElementById("products");

     let type = form.type.value;

     let desc = form.desc.value;

     let price = form.price.value;

     let image = form.image.value;

     let p = new Product(type, desc, price, image) ;

     ProductData.push(p);

     console.log(ProductData)

     localStorage.setItem("products",JSON.stringify(ProductData));

     window.location.reload();

}