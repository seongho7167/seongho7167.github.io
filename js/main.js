$(document).ready(function(){
    $(".gnb_bc").click(function(){
        $(".ckBox").prop("checked", false);
    });
    $(".about_container").on("mouseover", function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
});