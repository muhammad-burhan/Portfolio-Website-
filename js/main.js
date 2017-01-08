/**
 * Created by Burhan Noman on 12/28/2016.
 */

var parallax;
$(document).ready(function() {
    var totalPages = $("#fullpage .section.portfolio-item").length;
    $(".page-number .total-pages").html(totalPages);
    $('#fullpage').fullpage({
        scrollingSpeed: 900,
        loopTop: true,
        loopBottom: true,
        onLeave: function(index, nextIndex, direction) {
            $(".page-number .current-page").html(nextIndex);
        }
    });

    $("#download-resume").click(function(){
        window.open('docs/Burhan-Design.pdf');
    });

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
        }, 500);
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



    $('[data-view-process]').click(function(e) {
        e.stopPropagation();

        var dest = $(this).data('detail-page');

        loadTemplate(dest);
        $("body").addClass("detail-page-open");
        //Enable work page scrolling
        $.fn.fullpage.setAllowScrolling(false);
        $(".detail-page").fadeIn();
        $(".logo-light").fadeOut(function(){
            $(".visible-detail-page").fadeIn();
            closeSideBar();
            $(".list-of-projects").removeClass("close");
        });
        $(".list-of-projects").removeClass("close");
    });

    $(".back-to-home.visible-detail-page").click(function(){
        $(".visible-detail-page").fadeOut(function(){
            $(".logo-light").fadeIn();
        });
        $.fn.fullpage.setAllowScrolling(true);
        $(".detail-page").fadeOut();
        $("body").removeClass("detail-page-open");
    });

    $('[data-restart-slides]').click(function(event) {
        setTimeout(function(){
            $(".page-number .current-page").html("1");
            $.fn.fullpage.silentMoveTo(1);
        }, 1000);
    });

    parallax = $('.parallex-item').parallax();
});


$(document).on('click', '.list-of-projects.close .circle', function()
{
    //Enable work page scrolling
    closeSideBar();

});

function closeSideBar(){
    //Enable work page scrolling
    $.fn.fullpage.setAllowScrolling(true);

    $(".list-of-projects").removeClass("close");
    setTimeout(function(){
        $("body").removeClass("opensidebar");
        $(".side-bar-overlay").fadeOut(500);
    }, 300);
}

function loadTemplate(temp) {
    var templateURL     = 'tpl/' + temp + ".html",
        $container = $('<div></div>');
    var param = {};

    $container.load(templateURL, param, function(data, status, xhr) {
        $(".detail-page").html(data);
    });
}
