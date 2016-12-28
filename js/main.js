/**
 * Created by Burhan Noman on 12/28/2016.
 */

$('[data-link]').click(function(event) {
    console.log("Redirection");
    var dest = $(this).data('destination');
    var source = $(this).data('source');
    dest = "." + dest;
    source = "." + source;

    if ($(dest).hasClass('off-scene-left')) {
        $(source).removeClass('on-scene');
        $(source).addClass('off-scene-right');
        $(dest).addClass('on-scene');
    } else if ($(dest).hasClass('off-scene-right')) {
        $(source).removeClass('on-scene');
        $(source).addClass('off-scene-left');
        $(dest).addClass('on-scene');
    }
});