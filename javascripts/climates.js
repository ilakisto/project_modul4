document.addEventListener("DOMContentLoaded", function() {
    
const photos = document.querySelectorAll('.imi');

photos.forEach(photo => {
  photo.addEventListener('mouseenter', () => {
    photos.forEach(p => p.classList.remove('active'));
    photo.classList.add('active');
  });
});




});