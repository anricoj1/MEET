$(window).resize(navScroll);
$(document).ready(navScroll);
$(window).scroll(navScroll);

function navScroll() {
    if ($(window).width() >= 992) {
        var scrollTop = 0;
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav').css({
                "padding" : "0px"
            });

            $('scrollD').css({
                "color" : "#101010",
                "padding-bottom" : "0px",
                "padding-top" : "0px"
            })

            $('#global-nav').addClass('scrolled-nav');

        } else if (scrollTop < 100) {
            $('.scrollD').css({
                "padding-bottom" : "10px",
                "padding-top" : "10px",
                "color" : "black"
            })
            $('#global-nav').removeClass('scrolled-nav');

        } else {
            $(".scrollD").css({
                "color" : "#101010",
                "padding-bottom" : "10px",
                "padding-top" : "10px"
            })

            $("#global-nav").css({
                "padding" : "21px",
                "padding-top" : "8px",
                "padding-bottom" : "8px"
            })
        }
    }
}