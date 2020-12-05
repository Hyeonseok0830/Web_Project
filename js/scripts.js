/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict




    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });




    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 500,
    });

    $(".my-language").click(function () {
        var id_check = $(this).attr("id");
        console.log(id_check);
        var angle = 0;
        var isStop = false;
        setInterval(function () {
            if (!isStop) {
                angle += 4;
                if (angle >= 360) {
                    isStop = true;
                    angle = 0;
                }
                $("#"+id_check).rotate(angle);
            }
            else {
                clearInterval(this);
            }
        }, 10);
        
    });

    // $("#main").ready(function () {
    //     var length = $(".tag-len").length;
    //     var element = $("#main");
    //     for (var i = 1; i <= length; i++) {
    //         $("#my-language" + i).css("color", "#" + (parseInt(Math.random() * 0xffffff)).toString(16));
    //         $("#my-language" + i).css("font-size", Math.floor((Math.random() * 20) + 50) + "px");
    //         $("#my-language" + i).css("postion", 'static');
    //         console.log($( "#my-language" + i ).width());
    //         var t = Math.floor((Math.random() *$( "#my-language" + i ).height()+500)-100);
    //         var l = Math.floor((Math.random() * $( "#my-language" + i ).width())-100);            
    //         console.log("X : " + l + " Y : " + t);
    //         $("#my-language" + i).offset({
    //             top: $("#main").position().top + t,
    //             left: $("#main").position().left + l
    //         });

    //     }
    // });

    // Collapse Navbar
    var navbarCollapse = function () {

        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        }
        else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $(document).mousemove(function (e) {
        $('.red-ball').css("top", e.pageY);
        $('.red-ball').css("left", e.pageX);
    });


})(jQuery); // End of use strict

function stopVideo1() {
    var div = document.getElementById("video_slide1");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function stopVideo2() {
    var div = document.getElementById("video_slide2");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}


