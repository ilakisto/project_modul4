document.addEventListener("DOMContentLoaded", function() {
    
//     let carts = document.querySelectorAll(".carts");
// carts.forEach(cart =>{
//     cart.addEventListener('mouseenter', function(){
//         carts.forEach(c =>{
//             c.style.width = '18.13vw';
//             c.style.height = '22.08vw';
//         });
//         cart.style.width = '28.06vw';
//         cart.style.height = '35.14vw';
//     });
//     cart.addEventListener('mouseleave', function(){
//         carts.forEach(c =>{
//             c.style.width = '18.13vw';
//             c.style.height = '22.08vw';
//         });
//         carts[0].style.width = '28.06vw';
//         carts[0].style.height = '35.14vw';
//     });
// });

const photos = document.querySelectorAll('.imi');

photos.forEach(photo => {
  photo.addEventListener('mouseenter', () => {
    photos.forEach(p => p.classList.remove('active'));
    photo.classList.add('active');
  });
});




});