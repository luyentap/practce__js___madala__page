function showInPageCart(){
    var list_item = document.getElementsByClassName("shopping-cart__table__body")[0];
    list_item.innerHTML ="";//đỡ xóa bên giao diện

    console.log(localStorage);
    var indexSumPricElement = 0;
    for(item in localStorage){
        if(item.includes("giohang",0)){
            var cart_item = JSON.parse(localStorage.getItem(item));
            var id_product = cart_item.id;
            var img_product = cart_item.img;
            var name_product = cart_item.name;
            var price_product = cart_item.price;
            var number = cart_item.number;
            var sumPrice= price_product*number;
            var item =
                `<tr class="shopping-cart__table__tr">
                    <td><img src="${img_product}"></td>
                    <td> ${name_product}</td>
                    <td>${price_product}<sup>đ</sup></td>
                    <td><input onchange="updateSumPriceProduct(${indexSumPricElement},${price_product},this.value)" type="number" value="${number}" /></td>
                    <td class="shopping-cart__table__tr__sump-price">${sumPrice}<sup>đ</sup></td>
                    <td ><button onclick="removeProductInCart(this.value)" value="${id_product}"><i class="fa fa-trash"></i></button></td>
                </tr>`;
            indexSumPricElement += 1;
            /* tag a not pass value on event(this.value)*/
            console.log(item)
            // list_item.appendChild(document.createTextNode(item));
            console.log('list item',list_item);
            list_item.innerHTML += item;
        }
    }
}
showInPageCart();

//update to localStorage
function updateCartInPage() {
    var list_item = document.getElementsByClassName("shopping-cart__table__tr");
    for(var i=0;i<list_item.length;i++){
        console.log(list_item[i]);
        var item = list_item[i];

        //get the product:id and number to update
        var button = item.children[5].children[0];
        var id_product = button.value;
        var input_number = item.children[3].children[0];
        var number = input_number.value;

        //set to the  localStorage
        var item_localStorage = JSON.parse(localStorage.getItem(`giohang_${id_product}`));
        item_localStorage.number = number;
        localStorage.setItem(`giohang_${id_product}`,JSON.stringify(item_localStorage));
    }
    showInPageCart();
    alert("bạn đã cập nhật giỏ hàng");
}

function updateSumPriceProduct(idProduct,price,number) {
    console.log("update sum price product",price,number);
    var sum = document.getElementsByClassName("shopping-cart__table__tr__sump-price")[idProduct];

    sum.innerHTML = `${price*number}<sup>đ</sup>`;

}

function removeProductInCart(value){
    console.log(value);
    localStorage.removeItem(`giohang_${value}`);
    // window.location.href="";
    showInPageCart();
}