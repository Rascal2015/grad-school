$(document).ready(function () {
    // JS SECTION1 WHEN HOVER
    $(".card-body").hover(function () {
        $(this).addClass('active').children('.hidden-cards').stop().slideDown(500);
    }, function(){
        $(this).children('.hidden-cards').stop().slideUp(500, function(){
            $(this).parent().removeClass('active');
        });
    });
    // JS SECTION2 CAROUSEL WHEN CLICK BUTTON
      $('.tabs-section2').not(":first").hide();
  $('.icon').click(function() {
    $('.icon').removeClass('active-icon');
    $(this).toggleClass('active-icon');
    var n = $('.icon').index(this);
     $('.tabs-section2').hide();
    $('.tabs-section2:eq('+ n +')').show(300);
  });
     // JS SECTION3 COUNTDOWN
    var target_date = new Date().getTime() + 1000 * 3600 * 48; // set the countdown date
    var days, hours, minutes, seconds; // variables for time units

    var countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    setInterval(function () {
        getCountdown();
    }, 1000);

    function getCountdown() {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;

        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));

        // format countdown string + set tag value
        countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
    }
    // JS SECTION4 CAROUSEL
    function pad(n) {
        return (n < 10 ? "0" : "") + n;
    }

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,

        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },

            1000: {
                items: 3,
            },
            1280: {
                items: 5,
            },
        },
    });
    // JS SCROLL
    $('.menu-top ul li').each()(function() {
    $(this).on("click", function (event) {
        event.preventDefault();
        let _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top }, 1000);
    });
     });

    // JS MENU WHEN SMALL SCREEN
    $(window).resize(function () {
        if ($(window).width() <= 769) {
            $(".menu-top ul li").click(function (event) {
                $(".ul-menu").addClass("remove-menu");
            });
            $(".checkbtn").click(function (event) {
                $(".ul-menu").removeClass("remove-menu");
            });
        }
    });
});
