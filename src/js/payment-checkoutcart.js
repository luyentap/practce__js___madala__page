var list_item = document.getElementsByClassName("shopping-cart__table__body")[0];
list_item.innerHTML ="";//đỡ xóa bên giao diện

console.log(localStorage);
for(item in localStorage){
    if(item.includes("cart",0)){
        var cart_item = JSON.parse(localStorage.getItem(item));
        var id_product = cart_item.id;
        var img_product = cart_item.img;
        var name_product = cart_item.name;
        var price_product = cart_item.price;
        var number = cart_item.number;
        var sumPrice= price_product*number;
        var item =
            `<tr class="shopping-cart__table__tr">
                    <td><img src=${img_product}></td>
                    <td> ${name_product}</td>
                    <td>${price_product}<sup>đ</sup></td>
                    <td>${number}</td>
                    <td class="shopping-cart__table__tr__sump-price">${sumPrice}</td>
                </tr>`;
        /* tag a not pass value on event(this.value)*/
        console.log(item)
        // list_item.appendChild(document.createTextNode(item));
        console.log('list item',list_item);
        list_item.innerHTML += item;
    }
}

function sumAllProduct(){
    var sumAllE = document.getElementsByClassName("sum-price__number")[0];
    var sumE = document.getElementsByClassName("shopping-cart__table__tr__sump-price");
    var sumPrice =0;
    for(var i=0;i<sumE.length;i++){
        sumPrice += parseInt(sumE[i].innerText);
    }
    sumAllE.innerHTML = `${sumPrice} <sup>đ</sup>`
}
sumAllProduct();
