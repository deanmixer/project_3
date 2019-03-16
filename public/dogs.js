$('.carousel').carousel();  

$(document).ready(function() { 
    if (document.cookie) {
        $("#cookie").addClass("show");
        $("#noCookie").addClass("hide");
    } else {
        $("#cookie").addClass("hide");
        $("#noCookie").addClass("show");
    };
});