document.addEventListener("DOMContentLoaded", function() {

    let img1 = document.querySelector('.img1');
let COLS = 10, ROWS = 6;
let SRC = './img/img1.jpeg';

for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    let cell = document.createElement('div');
    cell.className = 'grid-cell';
    let img = document.createElement('img');
    img.src = SRC;
    img.style.left = `${-(c / (COLS - 1)) * (1000 - 100)}%`;
    img.style.top = `${-(r / (ROWS - 1)) * (600 - 100)}%`;
    cell.appendChild(img);
    img1.appendChild(cell);
  }
}

img1.addEventListener('mousemove', function(e) {
  const rect = img1.getBoundingClientRect();
  const col = Math.floor(((e.clientX - rect.left) / rect.width) * COLS);
  const row = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS);
  const index = row * COLS + col;
  img1.querySelectorAll('.grid-cell').forEach((cell, i) => {
    cell.classList.toggle('active', i === index);
  });
});

img1.addEventListener('mouseleave', function(){
  img1.querySelectorAll('.grid-cell').forEach(c => c.classList.remove('active'));
});

});