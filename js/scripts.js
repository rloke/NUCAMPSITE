//Jquery for Play & Pause Buttons
/*$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});*/

$(function() {
    //Jquery for Play/Pause Button
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("i").removeClass("fa-pause");
            $("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("i").removeClass("fa-play");
            $("i").addClass("fa-pause");
        }   
    });
    //Jquery for Reserve Campsite Button
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show');
    });
    //Jquery for Login Button
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    });
});