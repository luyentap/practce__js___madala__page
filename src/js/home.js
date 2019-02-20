fetch("http://localhost:3000/hot-product")
    .then(function (response) {
        console.log("resonse", response);
        return response.json();
    })
    .then(function (result) {
        console.log("result", result);

        //element of product
        var img_product = document.getElementsByClassName("product__img");
        var brand_product = document.getElementsByClassName("product__detail__type");
        var name_product = document.getElementsByClassName("product__detail__name");
        var price_new_product = document.getElementsByClassName("product__detail__price__new");
        var price_old_product = document.getElementsByClassName("product__detail__price__old");
        var button_product = document.getElementsByClassName("product__detail__button__buy");

        //set value into each of product
        for(var i = 0; i<result.length;i++){
            console.log("product",result[i]);
            img_product[i].src = result[i].img;
            brand_product[i].innerText = result[i].brand;
            name_product[i].innerText = result[i].name_type;
            price_new_product[i].innerText = result[i].new_price;
            price_old_product[i].innerText = result[i].old_price;
            button_product[i].value = result[i].id;
            console.log('button',button_product[i]);
        }

    });

function fetchUri(uri) {
    fetch(uri)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return result;
        });
}
//localstorage can save object
// Storage.prototype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// }
//
// Storage.prototype.getObject = function(key) {
//     var value = this.getItem(key);
//     return value && JSON.parse(value);
// }

/*
add to cart, save into localstorage
@param value : value in button to click product
 */
function addToCart(value){
    console.log("id product added",value);

    fetch(`http://localhost:3000/hot-product/${value}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log("product added",result);

            var cart = localStorage.getItem(`giohang_${value}`);
            console.log("cart before",cart);
            if(cart===null){
                var item = {"id":value,"img":result.img,"name":result.name_type,"price":result.new_price,"number":1};
                console.log("item",item);
                localStorage.setItem(`giohang_${value}`,JSON.stringify(item));
                showInCart();
            }
            else{
                var cartFormat = JSON.parse(cart);
                console.log(cartFormat);
                cartFormat.number = cartFormat.number+1;
                console.log("cart after",cartFormat);
                localStorage.setItem(`giohang_${value}`,JSON.stringify(cartFormat));
            }
            alert(`sản phẩm ${result.name_type} đã được thêm`)
            showInCart();

        });
    // var product = fetchUri(`http://localhost:3000/hot-product/${value}`);
    // console.log(product);
    // window.location.href="";
}

