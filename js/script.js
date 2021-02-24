$(function () {
    "use strict"



    var navOff = $('.main_menu').offset().top;

    $(window).on('scroll', function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navOff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }


    });



    // Select all links with hashes
    $('a[href*="#"]')

        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {

            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top -50
                    }, 1000, function () {


                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });





    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
    });

    $(document).ready(function () {
        $('.venobox').venobox();
    });


    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                }
    },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                }
    },

  ]
    });

    $('.counter').counterUp({
        time: 4000,
    });


    $('.center_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
    },



            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },

  ]


    })

    $('.bk_to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000)
    })

    $(window).on('scroll', function () {
        var btn = $(this).scrollTop();

        if (btn > 2000) {
            $('.bk_to_top').fadeIn()
        } else {
            $('.bk_to_top').fadeOut()
        }
    })

});
