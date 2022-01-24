

/*$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});*/
/*$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
    });
});*/
$("h5").css("color","white");
$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
    });
});
$( ".coming-soon" ).click(function() {
    alert( "comimg soon" );
  });

