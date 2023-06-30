$(document).ready(function() {

    var url = document.location.href;
    $.each($(".menu__block a"), function() {
        if (this.href == url) {
            $(this).addClass('activelink');
        }
    });


    var url1 = document.location.href;
    $.each($(".submenu__block li a"),
        function() {
            if (this.href == url1) {
                $(this).addClass('activelink2');
            }
        });



    // Табы на топ-лист
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



    //tabs calendar - можно удалить в теме поменяла на chesstabs
   // $('ul.calendar__tabs').on('click', 'li:not(.calendar__tab_active)', function() {
     //   $(this)
       //     .addClass('calendar__tab_active').siblings().removeClass('calendar__tab_active')
         //   .closest('div.calendar').find('div.calendar__content').removeClass('calendar__content_active').eq($(this).index()).addClass('calendar__content_active');
    //});

  //tabs calendar
  $('ul.chesstabs__tabs').on('click', 'li:not(.chesstabs__tab_active)', function() {
    $(this)
        .addClass('chesstabs__tab_active').siblings().removeClass('chesstabs__tab_active')
        .closest('div.chesstabs').find('div.chesstabs__content').removeClass('chesstabs__content_active').eq($(this).index()).addClass('chesstabs__content_active');
});


    //tabs sidebar  
    $('ul.structure__tabs').on('click', 'li:not(.structure__tab_active)', function() {
        $(this)
            .addClass('structure__tab_active').siblings().removeClass('structure__tab_active')
            .closest('div.structure').find('div.structure__content').removeClass('structure__content_active').eq($(this).index()).addClass('structure__content_active');
    });


    $('ul.chess-tabs-vertical__tabs').on('click', 'li:not(.chess-tabs-vertical__tab_active)', function() {
        $(this)
            .addClass('chess-tabs-vertical__tab_active').siblings().removeClass('chess-tabs-vertical__tab_active')
            .closest('div.chess-tabs-vertical').find('div.chess-tabs-vertical__content').removeClass('chess-tabs-vertical__content_active').eq($(this).index()).addClass('chess-tabs-vertical__content_active');
    });


        //Табы на блок "Турниры" на главной странице
        $('ul.chess-tabs__tabs').on('click', 'li:not(.chess-tabs__tab_active)', function() {
            $(this)
                .addClass('chess-tabs__tab_active').siblings().removeClass('chess-tabs__tab_active')
                .closest('div.chess-tabs').find('div.chess-tabs__content').removeClass('chess-tabs__content_active').eq($(this).index()).addClass('chess-tabs__content_active');
        });


    //tabs news-all  
    // $('ul.news-all__tabs').on('click', 'li:not(.news-all__tab_active)', function() {
    //   $(this)
    //     .addClass('news-all__tab_active').siblings().removeClass('news-all__tab_active')
    //     .closest('div.news-all').find('div.news-all__content').removeClass('news-all__content_active').eq($(this).index()).addClass('news-all__content_active');
    // });

    //Табы на блок "Турниры" на главной странице
    //   $('ul.tabs-page__tabs').on('click', 'li:not(.tabs-page__tab_active)', function() {
    //     $(this)
    //         .addClass('tabs-page__tab_active').siblings().removeClass('tabs-page__tab_active')
    //         .closest('div.tabs-page').find('div.tabs-page__content').removeClass('tabs-page__content_active').eq($(this).index()).addClass('tabs-page__content_active');
    // });




    //tabs tourn-all  
    // $('ul.tourn-all__tabs').on('click', 'li:not(.tourn-all__tab_active)', function() {
    //   $(this)
    //     .addClass('tourn-all__tab_active').siblings().removeClass('tourn-all__tab_active')
    //     .closest('div.tourn-all').find('div.tourn-all__content').removeClass('tourn-all__content_active').eq($(this).index()).addClass('tourn-all__content_active');
    // });



    // activate wow.js - подключение скрипта для анимации
    new WOW().init();



    //  modal
    //$('[data-modal=registry]').on('click', function() {
      //  $('.overlay, #registry').fadeIn('slow');
    //});
    $('.modal-chess__close').on('click', function() {
        $('.overlay, #registry, #feedback').fadeOut('slow');
    });

    $('[data-modal=feedback]').on('click', function() {
        $('.overlay, #feedback').fadeIn('slow');
    });



   /*  function validateForms(form) {
        $('#registration-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                IDFIDE: {
                    number: true,
                    required: true,
                },

                IDFSHR: {
                    required: true,
                    number: true
                },
                homeaddress: "required",
                phone: "required",
                birthday: "required",               
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },

                IDFSHR: {
                    required: "Пожалуйста, введите свой код ФШР",
                    // number: jQuery.validator.format("Введите {0} символа!")
                },
                birthday: {
                    required: "Пожалуйста, введите свою дату рождения",
                    // number: jQuery.validator.format("Введите {0} символа!")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    phone: "Неправильно введен номер телефона"
                },
                homeaddress: {
                    required: "Пожалуйста, введите свой домашний адрес",
                },
                // feedtext: {
                //   required: "Пожалуйста, введите ваш вопрос",
                //   number: jQuery.validator.format("Введите {0} символов!")
                // },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    } */

    function validateForms2(form) {
        $('#feedback-form').validate({
            rules: {
                feedname: {
                    required: true,
                    minlength: 2
                },
                // phone: "required",
                phone: {
                    required: true,
                    minlength: 10
                },
                feedtext: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                feedname: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    phone: "Неправильно введен номер телефона"
                },
                feedtext: {
                    required: "Пожалуйста, введите ваш вопрос",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }

   // validateForms('#consultation-form');
   // validateForms('#registry form');
    validateForms2('#feedback form');
    // $('input[name=phone]').mask("7(999) 999-99-99");
    // $.mask.definitions['~'] = '[78]';
    // $('input[name=phone]').mask("~ (999) 999-9999");
    $.mask.definitions['~'] = '[78]';
    $("#feedphone").mask("~ (999) 999-9999");


    // smooth scroll and pageup    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1100) {
            $('.pageup').fadeIn();
        } else $('.pageup').fadeOut();
    });



    $("a[href=#up]").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });


    // carousel academi, для фотогаллерии внизу страницы
    $('.academy__carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"> <img src="../../icons/left.svg" alt="slide"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // carousel для страницы "Академия", для тренеров
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"> <img src="../../icons/left.svg" alt="slide"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
        // responsive: [{
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //     }
        // }]

    });


    
  // // carousel-photo для блока новости

    $(function() { 
        // Card's slider
          var $carousel = $('.slider-photo');
        
          $carousel
            .slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: true,
              fade: true,
              adaptiveHeight: true,
              swipeToSlide: true,
                //   asNavFor: '.slider-nav'
                prevArrow: '<button type="button" class="slick-prev"><img src="../../icons/left.svg" alt="slide"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
            })
            .magnificPopup({
              type: 'image',
              delegate: 'a:not(.slick-cloned)',
              closeOnContentClick: false,
              tLoading: 'Загрузка...',
              mainClass: 'mfp-zoom-in mfp-img-mobile',
              image: {
                verticalFit: true,
                tError: '<a href="%url%">Фото #%curr%</a> не загрузилось.'
              },
              gallery: {
                enabled: true,
                navigateByImgClick: true,
                tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counte
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
              },
              zoom: {
                enabled: true,
                duration: 300
              },
              removalDelay: 300, //delay removal by X to allow out-animation
              callbacks: {
                open: function() {
                  //overwrite default prev + next function. Add timeout for css3 crossfade animation
                  $.magnificPopup.instance.next = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                  };
                  $.magnificPopup.instance.prev = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                  };
                  var current = $carousel.slick('slickCurrentSlide');
                  $carousel.magnificPopup('goTo', current);
                },
                imageLoadComplete: function() {
                  var self = this;
                  setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
                },
                beforeClose: function() {
                  $carousel.slick('slickGoTo', parseInt(this.index));
                }
              }
            });
        
          
          
        });

    // // carousel-photo для блока новости
    // $('.slider-photo')
    //     .slick({
    //     // speed: 1200,
    //     adaptiveHeight: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     prevArrow: '<button type="button" class="slick-prev"><img src="../../icons/left.svg" alt="slide"></button>',
    //     nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
    //     swipeToSlide: true,
    //     // infinite: false
    // })
    //    .magnificPopup({
    //         delegate: 'a:not(.slick-cloned)',
    //         type: 'image',
    //         fixedContentPos: true,
    //         closeOnBgClick: true,
    //         alignTop: false,
    //         tLoading: 'Загрузска #%curr%...',
    //         mainClass: 'mfp-img-mobile',
    //         gallery: {
    //             enabled: true,
    //             navigateByImgClick: true,
    //             preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    //         }
    //     // });
    // });


// function lightboxTrigger() {
//     $('.slider-photo').magnificPopup({
// 		delegate: 'a:not(.slick-cloned)',
// 		type: 'image',
//         fixedContentPos: true,
//         closeOnBgClick: true,
//         alignTop: false,
// 		tLoading: 'Загрузска #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		}
// 	});
// }
// lightboxTrigger();




    // carousel-photo - карусель с эскизами
    $(document).ready(function() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"> <img src="../../icons/left.svg" alt="slide"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    // dots: true,
                    // arrows: false
                }
            }],
            // arrows: false,
            fade: true,
            // infinite: false,
            asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            // infinite: false,
            // arrows: true,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            // prevArrow: '<button type="button" class="slick-prev"> <img src="../../icons/left.svg" alt="slide"> </button>',
            // nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                // {
                // breakpoint: 750,
                //   settings: {
                //       vertical: false,
                //       dots: false,
                //       slidesToShow:2
                //   }
                // }
            ],
        });

    });



    //   $('.owl-carousel').owlCarousel();
    //   $('#carouselOne').owlCarousel({
    //     loop:true, //Зацикливаем слайдер
    //     margin:50, //Отступ от элемента справа в 50px
    //     nav:true, //Отключение навигации
    //     autoplay:true, //Автозапуск слайдера
    //     smartSpeed:1000, //Время движения слайда
    //     autoplayTimeout:2000, //Время смены слайда
    //     responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:2
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // });


    //добавление класс на положительные и отрицательные изменения рейтинга
   // $('#ratingTable td.rating__change').each(function() {
     //   if (parseInt($(this).html()) > 0) {
       //     $(this).addClass("higherthan0");
        //} else if (parseInt($(this).html()) < 0) {
            //$(this).addClass("lowerthan0");
        //}
    //});


    //ленивая загрузка 
    $(function() {
        $('.lazy').lazy();
        
    });


});





window.addEventListener('DOMContentLoaded', () => {
    'use strict';
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
/* 

// установка значения left для выпадающего меню авторизованного пользователя
window.addEventListener('DOMContentLoaded', () => {


    function setUserEnter() {
        let dropdownUser = document.getElementById('dropdown'), //hanburger
            dropdownBlock = document.getElementById('dropdown-content'), //menu
            widthLoginName = document.getElementById('login-name').offsetWidth,
            widthIconDropdown = document.getElementById('dropdown').offsetWidth;
        leftDropdownBlock = widthLoginName - widthIconDropdown - 5;
        leftDropdownBlock = -leftDropdownBlock;
        dropdownBlock.style.left = leftDropdownBlock + "px";
        // dropdownBlock.style.left = "-150px";
        dropdownBlock.style.display = 'none';
        // dropdownBlock.style.color = "red";


        // dropdownUser.addEventListener('click', function(event) {
        //     dropdownBlock.classList.toggle('dropdown-content_active');
        // });



        //открытие по клику меню юзера и закрытие меню по клику вне области меню
        // https://ru.stackoverflow.com/questions/140922/%D0%9A%D0%B0%D0%BA-%D0%B2-javascript-%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-div-%D0%BF%D1%80%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BA%D0%B5-%D0%B2%D0%BD%D0%B5-%D1%8D%D1%82%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B8%D0%B2%D0%B0
        const toggleDropdownBlock = () => {
            dropdownBlock.classList.toggle('dropdown-content_active');
        };

        dropdownUser.addEventListener('click', e => {
            e.stopPropagation();
            toggleDropdownBlock();
        });

        document.addEventListener('click', e => {
            let target = e.target,
                its_dropdownBlock = target == dropdownBlock || dropdownBlock.contains(target),
                its_dropdownUser = target == dropdownUser,
                dropdownBlock_is_active = dropdownBlock.classList.contains('dropdown-content_active');

            if (!its_dropdownBlock && !its_dropdownUser && dropdownBlock_is_active) {
                toggleDropdownBlock();
            }
        });
    }
    setUserEnter();



    // function setSizeImgCoach() {
    //     let academyImg = document.querySelectorAll('.academy__img');

    //     // высота картинки равна ширине картинке
    //     academyImg.forEach(function(item, i, academyimg) {
    //         item.style.height = item.offsetWidth + "px";
    //     });
    // }

    // //запускасть функцию только при определенном разрешении экрана
    // if (window.matchMedia("(max-width: 575px)").matches) {
    //     setSizeImgCoach();
    // }




}
);
 */


// // if (window.matchMedia("(max-width: 575px)").matches) {
//     // console.log("Screen width is at least 500px");
//     let
//     // academyCard       = document.querySelector('.academy__card'),
//     // widthAcademyCard  = academyCard.offsetWidth,
//     // heightAcademyCard = academyCard.offsetHeight,
//     // academyBody       = document.querySelectorAll('.academy__body'),
//         widthAcademyImg = document.querySelectorAll('.academy__img').offsetWidth,
//         heightAcademyImg = document.querySelectorAll('.academy__img').offsetHeight,
//         academyImg = document.querySelectorAll('.academy__img');
//     // academyImg.style.color = "red";
//     // academyImg.style.width = heightAcademyCard + "px";

//     // 2) изменение стилией для всех элементов
//     academyImg.forEach(function(item, i, academyimg) {
//         item.style.backgroundColor = 'blue';
//         // let b = item.offsetWidth;
//         // item.style.width = heightAcademyCard + "px";
//         item.style.height = item.offsetWidth + "px";
//     });
//     // academyBody.forEach(function(item, i, academyimg) {
//     //     // item.style.backgroundColor = 'blue';
//     //     item.style.height = heightAcademyCard + "px";              
//     // });
// // }




// 24.11.20 - не работает
// function getName(str) {
//     if (str.lastIndexOf('\\')) {
//         var i = str.lastIndexOf('\\') + 1;
//     } else {
//         var i = str.lastIndexOf('/') + 1;
//     }
//     var filename = str.slice(i);
//     var uploaded = document.getElementById("fileformlabel");
//     uploaded.innerHTML = filename;
// }