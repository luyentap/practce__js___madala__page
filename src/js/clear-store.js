function  clearStorage(){
    localStorage.clear();
    window.location.href = "";
}

//should clear cart, keep information of user
function clearCart() {
    for(item in localStorage){
        if(item.includes("giohang",0)){
            localStorage.removeItem(item);
        }
    }
}
clearCart();