$(document).ready(function(){
    $(".list_box .list1").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        $(".gnb_cir_box .gnb_cir2").addClass("on");
        $(".gnb_cir_box .gnb_cir2").siblings().removeClass("on");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(90deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
        setTimeout(function(){
            $(".photo_line1").css("animation","photo_lineAni 2s");
            $(".photo_line3").css("animation","photo_lineAni 2s");
            $(".photo_line2").css("animation","photo_lineAni2 2s");
            $(".photo_line4").css("animation","photo_lineAni2 2s");
            setTimeout(function(){
                $(".photo_fr").addClass("out");
                $(".page2 .page_bc2").addClass("in");
                $(".about_frame").addClass("in");
            }, 2000);
        }, 3700)
    });

    $(".list_box .list2").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        $(".gnb_cir_box .gnb_cir3").addClass("on");
        $(".gnb_cir_box .gnb_cir3").siblings().removeClass("on");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(180deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300);
        setTimeout(function(){
            $(".progress").css("opacity","1");
            $(".progress svg:nth-child(2) path").css("animation", "load 3s");
        }, 3700);
    });

    $(".list_box .list3").click(function(){
        $(".wrap").addClass("out");
        $(".list_wrap").addClass("out");
        $(".list_box").find(".list_txt").addClass("out");
        $(".gnb_cir_box .gnb_cir4").addClass("on");
        $(".gnb_cir_box .gnb_cir4").siblings().removeClass("on");
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
        $(".gnb_cir_box .gnb_cir5").addClass("on");
        $(".gnb_cir_box .gnb_cir5").siblings().removeClass("on");
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
        $(".gnb_cir_box .gnb_cir1").addClass("on");
        $(".gnb_cir_box .gnb_cir1").siblings().removeClass("on");
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

    $(".gnb_box .item2").click(function(){
        $(".wrap").addClass("out");
        $(".gnb_cir_box .gnb_cir2").addClass("on");
        $(".gnb_cir_box .gnb_cir2").siblings().removeClass("on");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(90deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
        setTimeout(function(){
            $(".photo_line1").css("animation","photo_lineAni 2s");
            $(".photo_line3").css("animation","photo_lineAni 2s");
            $(".photo_line2").css("animation","photo_lineAni2 2s");
            $(".photo_line4").css("animation","photo_lineAni2 2s");
            setTimeout(function(){
                $(".photo_fr").addClass("out");
                $(".page2 .page_bc2").addClass("in");
                $(".about_frame").addClass("in");
            }, 2000);
        }, 3700)
    });
    $(".gnb_box .item3").click(function(){
        $(".wrap").addClass("out");
        $(".gnb_cir_box .gnb_cir3").addClass("on");
        $(".gnb_cir_box .gnb_cir3").siblings().removeClass("on");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(180deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300);
        setTimeout(function(){
            $(".progress").css("opacity","1");
            $(".progress svg:nth-child(2) path").css("animation", "load 3s");
        }, 3700);     
    });
    $(".gnb_box .item4").click(function(){
        $(".wrap").addClass("out");
        $(".gnb_cir_box .gnb_cir4").addClass("on");
        $(".gnb_cir_box .gnb_cir4").siblings().removeClass("on");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateY(270deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
    });
    $(".gnb_box .item5").click(function(){
        $(".wrap").addClass("out");
        $(".gnb_cir_box .gnb_cir5").addClass("on");
        $(".gnb_cir_box .gnb_cir5").siblings().removeClass("on");
        setTimeout(function(){
            $(".wrap").not(":animated").css("transform","rotateX(90deg)");
        }, 1200);
        setTimeout(function(){
            $(".wrap").removeClass("out");
            $(".hd").css("display","block");
        }, 2300)
    });

    $(".about_btn_box li").click(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
    $(".about_btn2").click(function(){
        $(".about_container1").css("top","-40vh");
        $(".about_container2").css("top","0vh");
        $(".about_container3").css("top","40vh");
    });
    $(".about_btn3").click(function(){
        $(".about_container1").css("top","-80vh");
        $(".about_container2").css("top","-40vh");
        $(".about_container3").css("top","0vh");
    });
    $(".about_btn1").click(function(){
        $(".about_container1").css("top","0vh");
        $(".about_container2").css("top","40vh");
        $(".about_container3").css("top","80vh");
    });

});