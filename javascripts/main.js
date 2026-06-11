document.addEventListener("DOMContentLoaded", function() {

  // исчезание минитекста
  const fixedText = document.querySelector('.minitexts');
  const target = document.querySelector('.s4');
  const mainEl = document.querySelector('main');

  if (fixedText && target && mainEl) {
    mainEl.addEventListener('scroll', function(){
      const targetTop = target.getBoundingClientRect().top;
      if (targetTop <= window.innerHeight) {
        fixedText.style.opacity = '0';
      } else {
        fixedText.style.opacity = '1';
      }
    });
  }

  // попап
  const overlay = document.getElementById('popupOverlay');

  if (overlay) {
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
  }

  // ссылка
  let links = document.querySelectorAll('.option-list a');
  links.forEach(function(link){
    let linkfile = link.getAttribute('href').replace('./', '');
    if (window.location.href.endsWith(linkfile)){
      link.classList.add('activo');
    }
  });

  // даты
  const startDate = document.querySelector(".there");
  const endDate = document.querySelector(".back");
  if (startDate && endDate) {
    startDate.addEventListener('change', function(){
      endDate.min = startDate.value;
      if (endDate.value < startDate.value) {
        endDate.value = '';
      }
    });
  }

});