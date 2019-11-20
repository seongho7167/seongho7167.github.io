$(document).ready(function(){
    function nextAni(){ 
        $(".img_wrap").not(":animated").animate({"margin-left":"-1920px"}, 800, function(){
            $(".img_wrap li").eq(0).appendTo($(".img_wrap"));
            $(".img_wrap").css("margin-left","0px");
            $(".rdo_btn li").eq(0).appendTo($(".rdo_btn"));
            $(".rdo_btn li button").removeClass("on");
            $(".rdo_btn li").eq(0).find("button").addClass("on");
        })
        
    }
    var intv = setInterval(function(){ nextAni();}, 3900);

    $(".rdo_btn li").click(function(){
        clearInterval(intv);
        var idx = $(this).index();
        if(idx!=0) {
            for(var a=0;a<idx-1;a++){
                $(".rdo_btn li").eq(0).appendTo($(".rdo_btn"));
                $(".img_wrap li").eq(0).appendTo($(".img_wrap"));
            }
            nextAni();
        }
        intv = setInterval(function(){ nextAni();}, 3900);
    })
});