$(document).ready(function () {
    // initialize carousel and configure
    $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            mouseDrag: false,
            smartSpeed: 1000
        }
    );
    // add/remove atcive class for links
    $(".latest_projects a").click(function () {
        if (!($(this).hasClass("active"))) {
            $(".latest_projects a").each(function () {
                $(this).removeClass("active");
            });
            $(this).addClass("active")
        }
    });
});
