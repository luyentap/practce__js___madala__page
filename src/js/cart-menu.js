//show in cart
function showInCart(){
    var list_item = document.getElementsByClassName("list__item")[0];
    list_item.innerHTML ="";

    console.log(localStorage);
    var sumPriceInCart = 0;
    for(item in localStorage){
        if(item.includes("giohang",0)){
            var cart_item = JSON.parse(localStorage.getItem(item));
            var id_product = cart_item.id;
            var img_product = cart_item.img;
            var name_product = cart_item.name;
            var price_product = cart_item.price;
            var number = cart_item.number;
            sumPriceInCart += price_product*number;
            var item = `<div class="cart__item">
                            <img class="cart__item__img" src="${img_product}">
                            <div class="cart__item__description">
                                <p class="cart__item__description__name">${name_product}</p>
                                <p class="cart__item__description__price">${price_product}<sup>đ</sup></p></div>
                            <button value="${id_product}" onclick="removeProductInCart(this.value)">x</button></div>`;
            /* tag a not pass value on event(this.value)*/
            console.log(item)
            // list_item.appendChild(document.createTextNode(item));
            console.log('list item',list_item);
            list_item.innerHTML += item;
        }
    }
    var sumPriceInCartTag = document.getElementsByClassName("cart__sum-price__value")[0];
    sumPriceInCartTag.innerText = sumPriceInCart;
}
showInCart();

/*
   @param: value: id product when click product
 */
function removeProductInCart(value){
    console.log(value);
    localStorage.removeItem(`giohang_${value}`);
    // window.location.href="";
    showInCart();
}