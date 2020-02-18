
$(document).ready(function(){

//   var url=document.location.href;
//   $.each($(".menu__block a"),function(){
//     if(this.href==url){$(this).addClass('activelink');
//   };
// });



// $('.menu__block a').each(function() {
//   if ( (window.location.pathname.indexOf( $(this).attr('href') ) ) > -1) {
//     $(this).addClass('activelink');
   
//   }
// });


document.querySelectorAll('.menu li a').forEach(function(el) {
  if ( window.location.pathname.indexOf(el.getAttribute('href')) > -1 ) {
      el.classList.add('active');
  }
});



  //tabs calendar
  
  $('ul.calendar__tabs').on('click', 'li:not(.calendar__tab_active)', function() {
    $(this)
      .addClass('calendar__tab_active').siblings().removeClass('calendar__tab_active')
      .closest('div.calendar').find('div.calendar__content').removeClass('calendar__content_active').eq($(this).index()).addClass('calendar__content_active');
  });
  


 //tabs sidebar
  
  $('ul.structure__tabs').on('click', 'li:not(.structure__tab_active)', function() {
    $(this)
      .addClass('structure__tab_active').siblings().removeClass('structure__tab_active')
      .closest('div.structure').find('div.structure__content').removeClass('structure__content_active').eq($(this).index()).addClass('structure__content_active');
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

$('.tabs__nav li').click(function(e) {
  var a = $(this),
      parent = a.parents('.tabs'),
      nav = parent.children('.tabs__nav').children('li'),
      box = parent.children('.tabs__box').children('div');
 
  if (!a.hasClass('active')) {
    a.addClass('active')
      .siblings().removeClass('active');
 
    box.eq(a.index()).addClass('active')
      .siblings().removeClass('active');
  } 
  e.preventDefault();
});