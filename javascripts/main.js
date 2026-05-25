document.addEventListener("DOMContentLoaded", function() {

// let img404 = document.querySelector('.img404');
// let COLS = 10, ROWS = 6;
// let SRC = "./img/404.png";

// for (let r = 0; r < ROWS; r++) {
//   for (let c = 0; c < COLS; c++) {
//     let cell = document.createElement('div');
//     cell.className = 'grid-cell';
//     let img = document.createElement('img');
//     img.src = SRC;
//     img.style.left = `${-(c / (COLS - 1)) * (1000 - 100)}%`;
//     img.style.top = `${-(r / (ROWS - 1)) * (600 - 100)}%`;
//     cell.appendChild(img);
//     img404.appendChild(cell);
//   }
// }

// img404.addEventListener('mousemove', function(e) {
//   const rect = img404.getBoundingClientRect();
//   const col = Math.floor(((e.clientX - rect.left) / rect.width) * COLS);
//   const row = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS);
//   const index = row * COLS + col;
//   img404.querySelectorAll('.grid-cell').forEach((cell, i) => {
//     cell.classList.toggle('active', i === index);
//   });
// });

// img404.addEventListener('mouseleave', function(){
//   img404.querySelectorAll('.grid-cell').forEach(c => c.classList.remove('active'));
// });





let links = document.querySelectorAll('.option-list a');

links.forEach(function(link){
  let linkfile = link.getAttribute('href').replace('./', '');
  if (window.location.href.endsWith(linkfile)){
    link.classList.add('activo');
  }
});







});