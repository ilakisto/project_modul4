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


const overlay = document.getElementById('popupOverlay');

  document.querySelector('.openbtn').addEventListener('click', function(){
    overlay.classList.add('open');
  });

  document.getElementById('popupClose').addEventListener('click', function(){
    overlay.classList.remove('open');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('open');
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