/**
 * Created by Burhan Noman on 12/28/2016.
 */

$('[data-link]').click(function(event) {
    console.log("Redirection");
    var dest = $(this).data('destination');
    var source = $(this).data('source');

    //Set the body class
    $("body").removeClass(source + "-body").addClass(dest + "-body");

    dest = "." + dest;
    source = "." + source;
    var destMeta = dest + "-meta";
    var sourceMeta = source + "-meta";

    window.scrollTo(0, 0);
    $(dest + " section").fadeIn(300);
    // except main page
    if(source != ".background-container")
        $(source + " section").fadeOut(300);

    $(sourceMeta).fadeOut(200);
    $(destMeta).fadeIn(1500);

    // hide the list of projects
    $(".side-bar").hide();
    $(".list-of-projects").hide();

    if ($(dest).hasClass('off-scene-left')) {
        $(source).removeClass('on-scene');
        $(dest).removeClass('off-scene-left');
        $(source).addClass('off-scene-right');

        $(dest).removeClass('off-scene-right');
        $(dest).removeClass('off-scene-left');

        $(dest).addClass('on-scene');
    } else if ($(dest).hasClass('off-scene-right')) {
        $(source).removeClass('on-scene');
        $(dest).removeClass('off-scene-right');
        $(source).addClass('off-scene-left');

        $(dest).removeClass('off-scene-right');
        $(dest).removeClass('off-scene-left');

        $(dest).addClass('on-scene');
    }

    setTimeout(function(){
        $(".side-bar").show();
        $(".list-of-projects").fadeIn(300);
    }, 800);
});

$('[data-jump]').click(function(event) {
    console.log("Redirection");
    var dest = $(this).data('destination');
    var source = $(this).data('source');

    //Set the body class
    $("body").removeClass(source + "-body").addClass(dest + "-body");

    dest = "." + dest;
    source = "." + source;
    var destMeta = dest + "-meta";
    var sourceMeta = source + "-meta";

    window.scrollTo(0, 0);
    $(dest + " section").fadeIn(300);
    // except main page
    if(source != ".background-container")
        $(source + " section").fadeOut(300);


    $(sourceMeta).fadeOut(200);
    $(destMeta).fadeIn(1500);

    if (dest == '.works-page') {
        $(source).removeClass('on-scene').removeClass('off-scene-right').addClass('off-scene-left');
        $(dest).removeClass('off-scene-right').removeClass('off-scene-left').addClass('on-scene');
        $(".background-container").removeClass('off-scene-right').hide().addClass('off-scene-left').show(400);
    } else if (dest == '.about-page') {
        $(source).removeClass('on-scene').removeClass('off-scene-left').addClass('off-scene-right');
        $(dest).removeClass('off-scene-right').removeClass('off-scene-left').addClass('on-scene');
        $(".background-container").removeClass('off-scene-left').hide().addClass('off-scene-right').show(400);

    }
});

$(".side-bar").click(function(){
    //Disable work page scrolling
    $.fn.fullpage.setAllowScrolling(false);

    $("body").addClass("opensidebar");
    $(".side-bar-overlay").fadeIn(400, function(){
        $(".list-of-projects").addClass("close");
    });
});

$(document).on('click', '.list-of-projects.close .circle', function()
{
    //Enable work page scrolling
    $.fn.fullpage.setAllowScrolling(true);

    $(".list-of-projects").removeClass("close");
    setTimeout(function(){
        $("body").removeClass("opensidebar");
        $(".side-bar-overlay").fadeOut(500);
    }, 300);

});

