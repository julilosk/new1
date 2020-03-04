
$(document).ready(function(){

  var url=document.location.href;
  $.each($(".menu__block a"),function(){
    if(this.href==url){$(this).addClass('activelink');
  };
});


var url=document.location.href;
$.each($(".submenu__block a"),function(){
  if(this.href==url){$(this).addClass('activelink2');
};
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
  


 //tabs news-all  
  $('ul.news-all__tabs').on('click', 'li:not(.news-all__tab_active)', function() {
    $(this)
      .addClass('news-all__tab_active').siblings().removeClass('news-all__tab_active')
      .closest('div.news-all').find('div.news-all__content').removeClass('news-all__content_active').eq($(this).index()).addClass('news-all__content_active');
  });


   //tabs news-all  
   $('ul.tabs-page__tabs').on('click', 'li:not(.tabs-page__tab_active)', function() {
    $(this)
      .addClass('tabs-page__tab_active').siblings().removeClass('tabs-page__tab_active')
      .closest('div.tabs-page').find('div.tabs-page__content').removeClass('tabs-page__content_active').eq($(this).index()).addClass('tabs-page__content_active');
  });
  
  

//tabs tourn-all  
  $('ul.tourn-all__tabs').on('click', 'li:not(.tourn-all__tab_active)', function() {
    $(this)
      .addClass('tourn-all__tab_active').siblings().removeClass('tourn-all__tab_active')
      .closest('div.tourn-all__box').find('div.tourn-all__content').removeClass('tourn-all__content_active').eq($(this).index()).addClass('tourn-all__content_active');
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




  // carousel
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-prev"> <img src="../../icons/left.svg" alt="slide"> </button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
          dots: true,
          arrows: false
          }
        }
    ]        
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


$('#ratingTable td.rating__color').each(function() {
  if(parseInt($(this).html())>0){
  $(this).addClass("higherthan100");
  }else if (parseInt($(this).html())<0){
  $(this).addClass("lowerthan100");
  }    
});