$(document).ready(function () {
    $("#homeID").click(function () {
        $('html, body').animate({
            scrollTop: $("#homeIDscroll").offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#aboutID").click(function () {
        $('html, body').animate({
            scrollTop: $(".aboutMe").offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#resumeID").click(function () {
        $('html, body').animate({
            scrollTop: $("#resumeIDscroll").offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#projectsID").click(function () {
        $('html, body').animate({
            scrollTop: $(".projectsClass").offset().top
        }, 2000);
    });
});

$(document).ready(function () {
    $("#contactID").click(function () {
        $('html, body').animate({
            scrollTop: $("#contactMeID").offset().top
        }, 2000);
    });
});


