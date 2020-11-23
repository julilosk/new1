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
    // $('ul.news-all__tabs').on('click', 'li:not(.news-all__tab_active)', function() {
    //   $(this)
    //     .addClass('news-all__tab_active').siblings().removeClass('news-all__tab_active')
    //     .closest('div.news-all').find('div.news-all__content').removeClass('news-all__content_active').eq($(this).index()).addClass('news-all__content_active');
    // });


    //tabs news-all  
    $('ul.tabs-page__tabs').on('click', 'li:not(.tabs-page__tab_active)', function() {
        $(this)
            .addClass('tabs-page__tab_active').siblings().removeClass('tabs-page__tab_active')
            .closest('div.tabs-page').find('div.tabs-page__content').removeClass('tabs-page__content_active').eq($(this).index()).addClass('tabs-page__content_active');
    });



    //tabs tourn-all  
    // $('ul.tourn-all__tabs').on('click', 'li:not(.tourn-all__tab_active)', function() {
    //   $(this)
    //     .addClass('tourn-all__tab_active').siblings().removeClass('tourn-all__tab_active')
    //     .closest('div.tourn-all').find('div.tourn-all__content').removeClass('tourn-all__content_active').eq($(this).index()).addClass('tourn-all__content_active');
    // });



    // activate wow.js - подключение скрипта для анимации
    new WOW().init();



    //  modal
    $('[data-modal=registry]').on('click', function() {
        $('.overlay, #registry').fadeIn('slow');
    });
    $('.modal-chess__close').on('click', function() {
        $('.overlay, #registry, #feedback').fadeOut('slow');
    });

    $('[data-modal=feedback]').on('click', function() {
        $('.overlay, #feedback').fadeIn('slow');
    });



    function validateForms(form) {
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
                // feedtext: {
                //   required: true,
                //   minlength: 10
                // },
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
    }

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

    validateForms('#consultation-form');
    validateForms('#registry form');
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


    // carousel academi
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

    // $(function() {
    //     $('.academy__img').height($('.academy__img').width() * 0.8);

    //     $(window).resize(function() {
    //         $('.academy__img').height($('.academy__img').width() * 0.8);
    //     });
    // });



    // carousel
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



    // carousel-photo №2
    $('.slider-photo').slick({
        // speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../../icons/left.svg" alt="slide"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../../icons/right.svg" alt="slide"></button>'
    });



    // carousel-photo
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




});

// установка значения left
let dropdownBlock = document.getElementById('dropdown-content'),
    widthLoginName = document.getElementById('login-name').offsetWidth,
    widthIconDropdown = document.getElementById('dropdown').offsetWidth;
leftDropdownBlock = widthLoginName - widthIconDropdown - 5;
leftDropdownBlock = -leftDropdownBlock;
dropdownBlock.style.left = leftDropdownBlock + "px";
// dropdownBlock.style.left = "-150px";
dropdownBlock.style.display = 'none';
// $('#dropdown-content').hover.addClass('show');
dropdownBlock.style.color = "red";





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
    if (parseInt($(this).html()) > 0) {
        $(this).addClass("higherthan100");
    } else if (parseInt($(this).html()) < 0) {
        $(this).addClass("lowerthan100");
    }
});




function getName(str) {
    if (str.lastIndexOf('\\')) {
        var i = str.lastIndexOf('\\') + 1;
    } else {
        var i = str.lastIndexOf('/') + 1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}