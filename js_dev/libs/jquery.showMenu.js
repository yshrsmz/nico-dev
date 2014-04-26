(function (e) {
    e.fn.toggleClass = function (t) {
        var n = e.extend({_container: ".header", _trigger: ".hdButton", _content: ".hdContent"}, t);
        e(n._container).each(function () {
            e(n._trigger).bind("click", function () {
                var t = e(n._trigger).index(this);
                var r = e(n._content).eq(t);
                if (r.hasClass("active") || e(this).hasClass("selected")) {
                    e(this).removeClass("selected");
                    r.removeClass("active")
                } else {
                    e(n._content).removeClass("active");
                    e(n._trigger).removeClass("selected");
                    e(this).addClass("selected");
                    r.addClass("active")
                }
            })
        });
        return this
    }
})(jQuery);
$(function () {
    $(".header").toggleClass()
});