$(document).ready(function(){
    $(".map_tit_box .map_tit1").click(function(){
        $(".map_tit_box .map_tit2").removeClass("on");
        $(".map_tit_box .map_tit1").addClass("on");
    });
    $(".map_tit_box .map_tit2").click(function(){
        $(".map_tit_box .map_tit1").removeClass("on");
        $(".map_tit_box .map_tit2").addClass("on");
    });
    $(".map_tit_box .map_tit1").click(function(){
        $(".map_fr .map2").removeClass("on");
        $(".map_fr .map1").addClass("on");
    });
    $(".map_tit_box .map_tit2").click(function(){
        $(".map_fr .map1").removeClass("on");
        $(".map_fr .map2").addClass("on");
    });
});