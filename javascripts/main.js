document.addEventListener("DOMContentLoaded", function() {

const fixedText = document.querySelector('.minitexts');
const target = document.querySelector('.s4');
const mainEl = document.querySelector('main');

mainEl.addEventListener('scroll', function(){
    const targetTop = target.getBoundingClientRect().top;
    
    if (targetTop <= window.innerHeight) {
        fixedText.style.opacity = '0';
    } else {
        fixedText.style.opacity = '1';
    }
});






let links = document.querySelectorAll('.option-list a');

links.forEach(function(link){
  let linkfile = link.getAttribute('href').replace('./', '');
  if (window.location.href.endsWith(linkfile)){
    link.classList.add('activo');
  }
});



let startDate = document.querySelector(".there");
let endDate = document.querySelector(".back");
startDate.addEventListener('change', function(){
endDate.min = startDate.value;
  if (endDate.value < startDate.value) {
    endDate.value = '';
  }
});


});