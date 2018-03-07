/**
 * Created by Burhan Noman on 12/28/2016.
 */

var parallax;
$(document).ready(function() {
    var totalPages = $("#fullpage .section").length;
    $(".page-number .total-pages").html(totalPages);

    $(document).ready(function() {
        $('#fullpage').fullpage({
            scrollingSpeed: 800,
            loopBottom: true,
            afterRender: function(){
                setTimeout(function(){
                    $.fn.fullpage.setAllowScrolling(false);
                }, 100);
            },
            onLeave: function(index, nextIndex, direction){
                $(".page-number .current-page").html(nextIndex);
            }
        });
    });

    /*Setting a scroll bar for about page after giving the shader time to get responsive*/
    setTimeout(function(){
        $(".about-page").css({"overflow-y": "auto", "height": "100%"});
        //$.fn.fullpage.setAllowScrolling(false);
    }, 1000);

    $("#download-resume").click(function(){
        window.open('docs/Burhan-Design.pdf');
    });

    $('[data-link]').click(function(event) {
        var dest = $(this).data('destination');
        var source = $(this).data('source');

        //Set the body class
        $("body").removeClass(source + "-body").addClass(dest + "-body");

        dest = "." + dest;
        source = "." + source;
        var destMeta = dest + "-meta";
        var sourceMeta = source + "-meta";

        /* For destroying and adding events*/
        if (dest == '.works-page') {
            $.fn.fullpage.setAllowScrolling(true);
        } else if (dest == '.about-page'){
            $.fn.fullpage.setAllowScrolling(false);
        } else {
            $.fn.fullpage.setAllowScrolling(false);
        }

        window.scrollTo(0, 0);
        $(dest + " section").fadeIn(300);
        // hide the content of about page so that there is no scroll on the main page
        if(source == ".about-page")
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
            $.fn.fullpage.setAllowScrolling(true);
            $(source).removeClass('on-scene').removeClass('off-scene-right').addClass('off-scene-left');
            $(dest).removeClass('off-scene-right').removeClass('off-scene-left').addClass('on-scene');
            $(".background-container").removeClass('off-scene-right').hide().addClass('off-scene-left').show(400);
        } else if (dest == '.about-page') {
            $.fn.fullpage.setAllowScrolling(false);
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

    $(".list-of-projects").click(function(){

        if(!($("body").hasClass("opensidebar"))){
            //Disable work page scrolling
            $.fn.fullpage.setAllowScrolling(false);

            $("body").addClass("opensidebar");
            $(".side-bar-overlay").fadeIn(400, function(){
                $(".list-of-projects").addClass("close");
            });
        }

    });

    $('[data-view-process]').click(function(e) {
        e.stopPropagation();

        var dest = $(this).data('detail-page');

        loadTemplate(dest);
        $("body").addClass("detail-page-open");

        //Disable work page scrolling
        $.fn.fullpage.setAllowScrolling(false);
        $(".works-page-meta .wp-back-btn").fadeOut(200);
        $(".detail-page").fadeIn();
        $(".detail-page").scrollTop(0);
        $(".logo-light").fadeOut(function(){
            $(".visible-detail-page-back").fadeIn();
            $(".visible-detail-page").fadeIn();
            closeSideBar();
            $(".list-of-projects").removeClass("close");
        });
        $(".list-of-projects").removeClass("close");
    });

    $(".back-to-home.visible-detail-page-back").click(function(){
        closeDetailPage();
    });
});

$(document).on('click', '.link-menu-item', function()
{
    var offset = 0; //Offset of 20px
    var link = $(this).attr("data-href");
    $('.detail-page').animate({
        scrollTop: $(link).offset().top + offset
    }, 1800);
});

$(document).on('click', '.list-of-projects.close .circle', function()
{
    /* Enable Events of work page*/
    if(!$("body").hasClass("detail-page-open")) {
        $.fn.fullpage.setAllowScrolling(true);
    }

    closeSideBar();
});

$(document).on('click', '.side-bar-overlay', function()
{
    /* Enable Events of work page*/
    if(!$("body").hasClass("detail-page-open")) {
        $.fn.fullpage.setAllowScrolling(true);
    }
    closeSideBar();
});

function closeSideBar(){
    $(".list-of-projects").removeClass("close");
    setTimeout(function(){
        $("body").removeClass("opensidebar");
        $(".side-bar-overlay").fadeOut(500);
    }, 300);
}

function loadTemplate(temp) {
    $(".detail-page").html("");
    var templateURL     = 'tpl/' + temp + ".html",
        $container = $('<div></div>');
    var param = {};

    $container.load(templateURL, param, function(data, status, xhr) {
        $(".detail-page").html(data);
    });
}

function closeDetailPage(){
    /* Enable Events of work page*/
    $.fn.fullpage.setAllowScrolling(true);
    /* Moving to the that section */
    var PAGE_POSITION = $(".detail-page .detail-page-container").data("section-position");
    $.fn.fullpage.silentMoveTo(PAGE_POSITION);

    $(".visible-detail-page").fadeOut(function(){
        $(".logo-light").fadeIn();
    });

    $(".visible-detail-page-back").hide();
    $(".works-page-meta .wp-back-btn").fadeIn();

    $(".detail-page").fadeOut();
    $("body").removeClass("detail-page-open");
}