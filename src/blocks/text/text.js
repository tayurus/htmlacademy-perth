$(document).ready(function() {
    $(window).scroll(function() {
            $(".text").each(function(index, item) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(item).offset().top;
            if ((elemTop <= docViewBottom) && (elemTop >= docViewTop))
                setTimeout(function(){
                    $(item).css({"margin-top" : "50px"});
                    $(item).animate({"opacity" : 1, "margin-top" : "0px"}, 1000);
                }, 100);
        })
    })
})
