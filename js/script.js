var headerScroll = document.querySelector("header");
var topBtn = document.querySelector('.top');
window.onscroll = function(){
    if(window.pageYOffset>20){
        topBtn.style.display="block";
        headerScroll.classList.add("headfixed");
    }else{
        topBtn.style.display="none";
        headerScroll.classList.remove("headfixed");
    }
}

topBtn.onclick= function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}
$(document).ready(function(){
    $(".toggle-menu").click(function(){
        $(".links").slideToggle()
    });
});

