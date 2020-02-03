
$(document).ready(function(){
  
  
  //tabs
    
  $('ul.toplist__tabs').on('click', 'li:not(.toplist__tab_active)', function() {
      $(this)
        .addClass('toplist__tab_active').siblings().removeClass('toplist__tab_active')
        .closest('div.toplist').find('div.toplist__content').removeClass('toplist__content_active').eq($(this).index()).addClass('toplist__content_active');
    });

    
  // activate wow.js - подключение скрипта для анимации
  new WOW().init(); 


  // smooth scroll and pageup

    
  $(window).scroll(function(){
    if($(this).scrollTop() > 1100){
        $('.pageup').fadeIn();
    } else $('.pageup').fadeOut();
  });

  $("a[href=#up]").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

});


window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__block'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__block_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__block_active');
      });
  });
});
