$(document).ready(function(){
    $(".con2_box").hover(function(){
        $(".con2_box .con2_text").addClass("on");
    })
    $(".con1_box, .con3_box").hover(function(){
        $(".con2_text").removeClass("on");
    })
    $(".con3_box").hover(function(){
        $(".con3_box .text_box").addClass("on");
    })
    $(".con2_box, .con4_box").hover(function(){
        $(".text_box").removeClass("on");
    })
})