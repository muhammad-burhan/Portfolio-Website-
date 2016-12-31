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
    $(".list-project-trigger").hide();
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
        $(".list-project-trigger").show();
        $(".list-of-projects").show();
    }, 1200);
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

$(".list-project-trigger").mouseenter(function(){
    $("body").addClass("opensidebar");
    $(".side-bar-overlay").fadeIn(500);
});

$(".list-project-trigger").mouseleave(function(){
    $("body").removeClass("opensidebar");
    $(".side-bar-overlay").fadeOut(500);
});

$(".side-bar").hover(function(){
    $("body").addClass("opensidebar");
    $(".side-bar-overlay").fadeIn(500);
});

$(".side-bar").mouseleave(function(){
    $("body").removeClass("opensidebar");
    $(".side-bar-overlay").fadeOut(500);
});