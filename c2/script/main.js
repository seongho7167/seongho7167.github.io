$(document).ready(function(){
    function nextAni(){
        $(".vs_box").not(":animated").animate({"margin-left":"-1920px"}, 800, function(){
            $(".vs_box li").eq(0).appendTo($(".vs_box"));
            $(".vs_box").css("margin-left","0px");
        });
        
    }
    var intv = setInterval(function(){ nextAni();}, 3500);

    $(".content_wrap").hover(function(){
        $(".scr_box").addClass("on");
    });
    $(".vs_box").hover(function(){
        $(".scr_box").removeClass("on");
    });

    $(".content_wrap").hover(function(){
        $(".totop").removeClass("on");
    });
    $(".vs_box").hover(function(){
        $(".totop").addClass("on");
    });
})