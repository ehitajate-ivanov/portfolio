$(document).ready(function () {
    $(".benefits-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $(".testimonials-sliders").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    })

    $(".stars").rateYo({
        rating: 4.6,
        normalFill: "#F5BF75",
        starSvg: '<svg svg width="26" height="24" viewBox="0 0 26 24"  xmlns="http://www.w3.org/2000/svg" ><path d="M11.7494 0.834866L8.6077 7.04035L1.57863 8.03866C0.31811 8.21677 -0.18706 9.73064 0.727057 10.5977L5.81243 15.4252L4.60965 22.2447C4.39315 23.4774 5.72583 24.4007 6.84202 23.8242L13.1302 20.6043L19.4183 23.8242C20.5345 24.396 21.8672 23.4774 21.6507 22.2447L20.4479 15.4252L25.5333 10.5977C26.4474 9.73064 25.9422 8.21677 24.6817 8.03866L17.6526 7.04035L14.511 0.834866C13.9481 -0.271247 12.3171 -0.285308 11.7494 0.834866Z" /></svg>'
    })

    // btn-up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".btn-up").fadeIn();
        } else {
            $(".btn-up").fadeOut();
        }
    });

    $(".btn-up").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800)
    });

    // play video
    $(".video-btn").click(function (e) {
        e.preventDefault();
        $(".video-btn").addClass("active")
        $(".video").addClass("active")
        $("#video").get(0).play()
    });

    $(".burger").click(function () {
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
    })

    // tabs

    $(".tab-element").click(function () {
        let value = $(this).attr("data-filter")
        if (value === "all") {
            $(".filter").show(1000)
        } else {
            $(".filter").not("." + value).hide(1000)
            $(".filter").filter("." + value).show(1000)
        }

        $(this).addClass("active").siblings().removeClass("active")

    })
});

ScrollReveal({
    reset: true,
    distance: "50px", 
    duration: 1200, 
    delay: 100,
    easing: "ease-in-out"
})

ScrollReveal().reveal('.third-title, .third-link, .cta-title, .cta-email, .cta-link, .inner-title.project-title, .case-content, .case-last', {
    interval: 200, 
    origin: "top"
});

ScrollReveal().reveal('.content-title, .content-list, .benefits-title, .case-list, .case-last a', {
    interval: 200, 
    origin: "right",
    distance: "100px",
    delay: 300,
});

ScrollReveal().reveal('.third-content figure', {
    origin: "bottom",
    distance: "70px",
    interval: 400, 
    delay: 200
});

ScrollReveal().reveal('.testimonials-title', {
    origin: "bottom"
});

ScrollReveal().reveal('.second-img', {origin: "top", duration: 1000});
ScrollReveal().reveal('.second-contentlist, .second-title, .second-text', {origin: "top", duration: 1400, delay: 600});
ScrollReveal().reveal('.hero-content', {origin: "left", delay: 120, duration: 1500, distance: "50%"});
ScrollReveal().reveal('.hero-img', {origin: "right", delay: 220, duration: 1500, distance: "50%"});

ScrollReveal().reveal('.about-img', {
    origin: "left", 
    delay: 120, 
    duration: 1500, 
    distance: "50%"
});
ScrollReveal().reveal('.about-content', {
    origin: "right", 
    delay: 220, 
    duration: 1500, 
    distance: "50%"
});
ScrollReveal().reveal('.first-p, .second-p, .team-title', {
    interval: 200, 
    origin: "top"
});