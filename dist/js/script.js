
$(document).ready(function(){
  
  
  //tabs
    
  $('ul.toplist__tabs').on('click', 'li:not(.toplist__tab_active)', function() {
      $(this)
        .addClass('toplist__tab_active').siblings().removeClass('toplist__tab_active')
        .closest('div.toplist').find('div.toplist__content').removeClass('toplist__content_active').eq($(this).index()).addClass('toplist__content_active');
    });
  

    //tabs calendar
    
    $('ul.calendar__tabs').on('click', 'li:not(.calendar__tab_active)', function() {
      $(this)
        .addClass('calendar__tab_active').siblings().removeClass('calendar__tab_active')
        .closest('div.calendar').find('div.calendar__content').removeClass('calendar__content_active').eq($(this).index()).addClass('calendar__content_active');
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


  $("#add").on("click", function() {
    $("<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>").appendTo("section");
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




// tabs nuber two


$('.toplist__tabs li').click(function(e) {
  var a = $(this),
      parent = a.parents('.tabs'),
      nav = parent.children('.toplist__tabs').children('li'),
      box = parent.children('.toplist__box').children('div');
 
  if (!a.hasClass('active')) {
    a.addClass('activ')
      .siblings().removeClass('active');
 
    box.eq(a.index()).addClass('active')
      .siblings().removeClass('active');
  }
 
  e.preventDefault();
});