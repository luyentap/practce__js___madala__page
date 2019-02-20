//show in list page
function showInListPage() {
    fetch(`http://localhost:3000/hot-product/`)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log("result in list page", result);

            var list_item = document.getElementsByClassName("list-content__body")[0];
            list_item.innerHTML = "";//đỡ xóa bên giao diện

            console.log(localStorage);
            var products = result;
            for (var i = 0; i < products.length; i++) {
                var id_product = products[i].id;
                var img_product = products[i].img;
                var name_product = products[i].name_type;
                var price_product = products[i].new_price;

                var item = `
                <div class="product">
                    <img src="${img_product}">
                    <div class="product__detail">
                        <div class="product__detail__type">${name_product}</div>
                        <div class="product__detail__buy"><i class="fa fa-heart"></i><i class="fa fa-heart"></i><i
                                class="fa fa-heart"></i><i class="fa fa-heart"></i><span>( 4 lượt mua)</span></div>
                        <p class="product__detail__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập
                            mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác
                            hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.</p>
                        <p class="product__detail__price">${price_product} <sup>đ</sup></p>
                        <div class="product__detail__button">
                            <button value="${id_product}" onclick="addToCart(this.value)">MUA HÀNG</button>
                            <button><i class="fa fa-heart"></i></button>
                            <button><i class="fa fa-refresh"></i></button>
                        </div>
                    </div>
                </div>`;

                /* tag a not pass value on event(this.value)*/
                console.log(item)
                // list_item.appendChild(document.createTextNode(item));
                console.log('list item', list_item);
                list_item.innerHTML += item;
            }
        });
}

showInListPage();

/*
   @param: value: id product when click product
 */

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
function addToCart(value) {
    console.log("id product added", value);

    fetch(`http://localhost:3000/hot-product/${value}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log("product added", result);

            var cart = localStorage.getItem(`giohang_${value}`);
            console.log("cart before", cart);
            if (cart === null) {
                var item = {
                    "id": value,
                    "img": result.img,
                    "name": result.name_type,
                    "price": result.new_price,
                    "number": 1
                };
                console.log("item", item);
                localStorage.setItem(`giohang_${value}`, JSON.stringify(item));
                //tránh lỗi :bấtđồng bộ chạy sau,nên để trong bất đồng bộ
                showInCart();
            }
            else {
                var cartFormat = JSON.parse(cart);
                console.log(cartFormat);
                cartFormat.number = cartFormat.number + 1;
                console.log("cart after", cartFormat);
                localStorage.setItem(`giohang_${value}`, JSON.stringify(cartFormat));
                showInCart();
            }
            alert(`sản phẩm ${result.name_type} đã được thêm`)
        });
    // var product = fetchUri(`http://localhost:3000/hot-product/${value}`);
    // console.log(product);

    // window.location.href="";

}
