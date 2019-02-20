//all input tag form form of personal
var name_personal = document.getElementsByClassName("form-element__name")[0];
var address_personal = document.getElementsByClassName("form-element__address")[0];
var phone_personal = document.getElementsByClassName("form-element__phone")[0];
var email_personal = document.getElementsByClassName("form-element__email")[0];
//all input tag form form of card
var card_name = document.getElementsByClassName("form-element__card-name")[0]
var card_number = document.getElementsByClassName("form-element__card-name")[0];

var personal_localStorage = JSON.parse(localStorage.getItem("personal"));
var card_localStorage = JSON.parse(localStorage.getItem("card"));

//if change address, they can change it and save it to localStorage
function addPayment(){
    console.log("localstorage of personal is null");
    var personal ={"name":name_personal.value,"address":address_personal.value,"phone":phone_personal.value,"email":email_personal.value};
    var card = {"name":card_name.value,"number":card_number.value};
    localStorage.setItem("personal",JSON.stringify(personal));
    localStorage.setItem("card",JSON.stringify(card));
}

function loadPayment(){
    if(personal_localStorage!=null){
        name_personal.value = personal_localStorage.name;
        address_personal.value = personal_localStorage.address;
        phone_personal.value = personal_localStorage.phone;
        email_personal.value = personal_localStorage.email;

        card_name.value =card_localStorage.name;
        card_number.value = card_localStorage.number;
    }
}
loadPayment();