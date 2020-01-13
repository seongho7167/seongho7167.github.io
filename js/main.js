$(document).ready(function(){
    $(".list_box .list1").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(90deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
    });

    $(".list_box .list2").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(180deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
    });

    $(".list_box .list3").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(270deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
    });
    $(".list_box .list4").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateX(90deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
    });

    $(".center_fr").hover(function(){
        $(".center_title").text("CLICK!").css("color","#6C0D0f");
    });
    $(".center_fr").on("mouseleave", function(){
        $(".center_title").text("HERE!").css("color","#290E14");
    });
    $(".center_title").click(function(){
        $(".center_fr").css("border","1px solid #290E14").css("border-radius", "100%");
        $(".center_box_line").css("display","none");
        setTimeout(function(){
            $(".center_fr").css("transform","scale(0.5)");
        }, 500);
        setTimeout(function(){
            $(".center_fr").css("opacity","0");
        }, 1500);
        setTimeout(function(){
            $(".list_wrap").css("display","block");
            $(".lt_side_box").addClass("in");
            $(".rt_side_box").addClass("in");
        }, 2500);
        setTimeout(function(){
            $(".list_txt").css("animation","listAni 1s")
        });
        
    });
    $(".rt_side_box .it1").hover(function(){
        $(this).find(".sns").attr("src","./img/icon/katalk2.png")
    });
    $(".rt_side_box .it1").on("mouseleave", function(){
        $(this).find(".sns").attr("src","./img/icon/katalk.png")
    });
    $(".rt_side_box .it2").hover(function(){
        $(this).find(".sns").attr("src","./img/icon/facebook2.png")
    });
    $(".rt_side_box .it2").on("mouseleave", function(){
        $(this).find(".sns").attr("src","./img/icon/facebook.png")
    });
    $(".rt_side_box .it3").hover(function(){
        $(this).find(".sns").attr("src","./img/icon/instagram2.png")
    });
    $(".rt_side_box .it3").on("mouseleave", function(){
        $(this).find(".sns").attr("src","./img/icon/instagram.png")
    });
    $(".rt_side_box .it4").hover(function(){
        $(this).find(".sns").attr("src","./img/icon/twiter2.png")
    });
    $(".rt_side_box .it4").on("mouseleave", function(){
        $(this).find(".sns").attr("src","./img/icon/twiter.png")
    });

    $(".gnb_box .item1").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotate(0deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".list_wrap").removeClass("out");
            $(".list_box").find(".list_txt").removeClass("out");
            $(".hd").css("display","none");
        }, 2300)
    });
});