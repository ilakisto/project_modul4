document.addEventListener("DOMContentLoaded", function() {

let fixedpart = document.querySelector(".fixed");
let stopfix = document.querySelector(".stop-fix");

forfooter.addEventListener("scroll", function(){
    const stopall = stopfix.getBoundingClientRect().top;
    if(stopall<=0){
        fixedpart.style.position = 'absolute';
        fixedpart.style.top = '300vh';
    }
    else {
        fixedpart.style.position = 'fixed';
        fixedpart.style.top = '0';
    };
});




})