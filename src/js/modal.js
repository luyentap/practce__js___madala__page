//set event when user click close(x) modal
function closeModal() {
    var body = document.getElementsByTagName("body")[0];
    var modal = document.getElementsByClassName("modal")[0];
    body.removeChild(modal);
}

// once user start browser and surf web, modal should show
// other time is auto close modal
if(sessionStorage.getItem("modal_is_showed")!=null){
    closeModal();
}
sessionStorage.setItem("modal_is_showed","yes");


