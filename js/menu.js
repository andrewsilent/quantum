$(document).ready(function () {
 
    function Scroll_block(){
        var scroll_top = $(document).scrollTop() + 98;
        $(".nav a[href^=\\#]").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + (target.outerHeight()) > scroll_top) {
                $(".nav li.active").parent().removeClass("active");
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });
    }
 
    $(document).on("scroll", Scroll_block);
 
    $(".nav li a[href^=\\#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(".nav li.active").parent().removeClass("active");
        $(this).parent().addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
        
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 200, function(){
            window.location.hash = hash;
            $(document).on("scroll", Scroll_block);
            
        });
 
    });
 
});