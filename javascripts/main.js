document.addEventListener("DOMContentLoaded", function() {


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