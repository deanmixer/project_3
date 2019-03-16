$('.carousel').carousel();

$(document).ready(function() {
    if (document.cookie) {
    console.log("Cookie")
        $("#cookie").addClass("show");
        $("#noCookie").addClass("hide");
        // $("#cookie").removeClass("hide");  
    } else {
    console.log("No cookie")
        $("#cookie").addClass("hide");
        $("#noCookie").addClass("show");
        // $("#noCookie").removeClass("hide"); 
    };
});

// window.onload = (function() {
//     $('.carousel').carousel();
//     if (document.cookie) {
//     console.log("Cookie")
//         // $("#cookie").addClass("show");
//         // $("#noCookie").addClass("hide");
//         $("#cookie").removeClass("hide");  
//     } else {
//     console.log("No cookie")
//         // $("#cookie").addClass("hide");
//         // $("#noCookie").addClass("show");
//         $("#noCookie").removeClass("hide"); 
//     };
// });