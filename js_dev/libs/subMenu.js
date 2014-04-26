$(document).ready(function() {
    $(document).on('click', '.header .hdButton', function(e) {
        var $that = $(this),
            t = $('.headButton').indexOf(this),
            $r = $('.hdContent').eq(t);

        if (r.hasClass('active') || $that.hasClass('selected')) {
            $that.removeClass('selected');
            $r.removeClass('active');
        } else {
            $('.hdContent').removeClass('active');
            $('.hdButton').removeClass('selected');
            $that.addClass('selected');
            $r.addClass('active');
        }
    });
});