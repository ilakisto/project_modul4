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


  const fixedG = document.querySelector('.g1120');
  const targets = document.querySelector('.s4');
  const mainE = document.querySelector('main');

  if (fixedG && targets && mainE) {
    mainE.addEventListener('scroll', function(){
      const targetsTop = targets.getBoundingClientRect().top;
      if (targetsTop <= window.innerHeight) {
        fixedG.style.opacity = '0';
      } else {
        fixedG.style.opacity = '1';
      }
    });
  }

  // попап
  const overlay = document.getElementById('popupOverlay');

  if (overlay) {
    document.querySelectorAll('.openbtn').forEach(function(btn) {
      btn.addEventListener('click', function(){
        overlay.classList.add('open');
      });
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
  };




   const radios = document.querySelectorAll('input[name="group1"]');
  const select = document.getElementById('houseSelect');
  const options = document.querySelectorAll('option[data-group]');
 
  function filterOptions(selectedGroup) {
    options.forEach(opt => {
      const matches = opt.dataset.group === selectedGroup;
      opt.hidden = !matches;
      opt.disabled = !matches; // на всякий случай, чтобы нельзя было выбрать клавиатурой
    });
    // сбрасываем select на placeholder, чтобы не остался выбранный, но скрытый вариант
    select.value = '';
  }
 
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      filterOptions(radio.value);
    });
  });


  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // показываем
        observer.unobserve(entry.target);       // чтобы не повторялось при обратном скролле
      }
    });
  }, {
    threshold: 0.2 // элемент должен показаться хотя бы на 20%, чтобы сработало
  });
 
  // подключаем наблюдатель ко всем .reveal-элементам на странице
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});