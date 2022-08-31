$(function () {

    var mixer = mixitup('.directions__courses');

    $('.directions__filter-item').on('click', function name(params) {
        $('.directions__filter-item').removeClass('direction__filter-item-active')
        $(this).addClass('direction__filter-item-active')
    })

    $('.team__slider').slick({
        arrows: false,
        dots: false,
        draggable: false,
        slidesToShow: 4,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                    },
                },
            ]
    })
    $('.team__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        draggable: false,
        slidesToShow: 1,
        waitForAnimate: false,
        dotsClass: "testimonials__dots",
        responsive:
            [
                {
                    breakpoint: 700,
                    settings: {
                        draggable: true,
                    },
                },
            ]
    })
    $('.testimonials__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__lessons-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__lessons-link--active')
    //     $(this).children('.program__lessons-text').slideToggle()
    // })
    $('.program__lessons-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__lessons-link--active')) {
            $(this).removeClass('program__lessons-link--active')
            $(this).children('.program__lessons-text').slideUp()
        }
        else {
            $('.program__lessons-link').removeClass('program__lessons-link--active')
            $('.program__lessons-link').children('.program__lessons-text').slideUp()
            $(this).addClass('program__lessons-link--active')
            $(this).children('.program__lessons-text').slideDown()
        }
    })

    $('.header__nav-list a, .header__get-consult, .footer__go-top, .empty-button, .button').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 800)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        }
        else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault();
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })
})
