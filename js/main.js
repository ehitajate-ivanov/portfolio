$(document).ready(function () {
    $(".benefits-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
    })

    $(".testimonials-sliders").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
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

    $(".burger").click(function(){
        $(".burger").toggleClass("active") 
        $(".nav").toggleClass("active") 
    })
});