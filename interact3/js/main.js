$(document).ready(function(){
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var i = 0;
    function restartPlay1() { video1.currentTime = 0; video1.play(); }
    function restartPlay2() { video2.currentTime = 0; video2.play(); }
    function restartPlay3() { video3.currentTime = 0; video3.play(); }
    function nextAni(){
        $(".vs_box .vs").stop().eq(1).addClass("on");
        setTimeout(function(){
            $(".vs_box .vs").stop().eq(1).siblings().removeClass("on");
            $(".vs_box .vs").stop().eq(0).appendTo($(".vs_box"));
        }, 1000);
    };
    function txtAni(){
        $(".btn_txt_box").not(":animated").find("li").eq(0).addClass("on");
        $(".btn_txt_box").find("li").eq(0).siblings().removeClass("on");
        setTimeout(function(){
            $(".btn_txt_box").find("li").eq(0).appendTo($(".btn_txt_box"));
        }, 6000);
    };
    txtAni();
    var intv3 = setInterval( function() { txtAni(); }, 7000); 
    function barAni(){
        if(i==3) {
            i = 1;
        } else {
            i++;
        }
        $(".btn").find(".bar").eq(i-1).animate({"width":"200px"}, 7000);
        setTimeout(function(){
            $(".it"+i).siblings().find(".bar").css("width","0");
        }, 50);   
    } 
    $(".it1, .btn_txt1").click(function(){
        clearInterval(intv);
        clearInterval(intv2);
        clearInterval(intv3);
        restartPlay1();
        $(".vs.item1").addClass("on");
        $(".vs.item1").prependTo($(".vs_box"));
        setTimeout(function(){
            $(".vs.item1").siblings().removeClass("on");
        }, 1000);
        $(".vs.item3").appendTo($(".vs_box"));
        $(".bar1").css("width","0px");
        $(".bar1").stop().animate({"width":"200px"}, 7000);
        $(".bar2").stop().css("width","0");
        $(".bar3").stop().css("width","0");
        $(".btn_txt_box").find(".btn_txt1").prependTo($(".btn_txt_box")).addClass("on");
        $(".btn_txt_box").find(".btn_txt1").siblings().removeClass("on");
        $(".btn_txt_box").find(".btn_txt3").appendTo($(".btn_txt_box"));
        i=1;
        intv = setInterval( function(){ nextAni(); }, 7000);
        intv2 = setInterval ( function(){ barAni(); }, 7000);
        intv3 = setInterval( function() { txtAni(); }, 7000); 
    });
    $(".it2, .btn_txt2").click(function(){
        clearInterval(intv);
        clearInterval(intv2);
        clearInterval(intv3);
        restartPlay2();
        $(".vs.item2").addClass("on");
        $(".vs.item2").prependTo($(".vs_box"));
        setTimeout(function(){
            $(".vs.item2").siblings().removeClass("on");
        }, 1000);
        $(".vs.item1").appendTo($(".vs_box"));
        $(".bar2").css("width","0px");
        $(".bar2").stop().animate({"width":"200px"}, 7000);
        $(".bar1").stop().css("width","0");
        $(".bar3").stop().css("width","0");
        $(".btn_txt_box").stop().find(".btn_txt2").prependTo($(".btn_txt_box")).addClass("on");
        $(".btn_txt_box").stop().find(".btn_txt2").siblings().removeClass("on");
        $(".btn_txt_box").find(".btn_txt1").appendTo($(".btn_txt_box"));
        i=2;
        intv = setInterval( function(){ nextAni(); }, 7000);
        intv2 = setInterval ( function(){ barAni(); }, 7000);
        intv3 = setInterval( function() { txtAni(); }, 7000); 
    });
    $(".it3, .btn_txt3").click(function(){
        clearInterval(intv);
        clearInterval(intv2);
        clearInterval(intv3);
        restartPlay3();
        $(".vs.item3").addClass("on");
        $(".vs.item3").prependTo($(".vs_box"));
        setTimeout(function(){
            $(".vs.item3").siblings().removeClass("on");
        }, 1000);
        $(".vs.item2").appendTo($(".vs_box"));
        $(".bar3").css("width","0px");
        $(".bar3").stop().animate({"width":"200px"}, 7000);
        $(".bar1").stop().css("width","0");
        $(".bar2").stop().css("width","0");
        $(".btn_txt_box").stop().find(".btn_txt3").prependTo($(".btn_txt_box")).addClass("on");
        $(".btn_txt_box").stop().find(".btn_txt3").siblings().removeClass("on");
        $(".btn_txt_box").find(".btn_txt2").appendTo($(".btn_txt_box"));
        i=0;
        intv = setInterval( function(){ nextAni(); }, 7000);
        intv2 = setInterval ( function(){ barAni(); }, 7000);
        intv3 = setInterval( function() { txtAni(); }, 7000); 
    });
    barAni();
    var intv = setInterval( function(){ nextAni(); }, 7000);
    var intv2 = setInterval ( function(){ barAni(); }, 7000); 

    $(".ss_box .item1").click(function(){
        video1.pause(); video1.currentTime = 0;
        video2.pause(); video2.currentTime = 0;
        video3.pause(); video3.currentTime = 0;
        clearInterval(intv);
        clearInterval(intv2);
        clearInterval(intv3);
        $(".btn span").stop().css("width","0");
        $(".ss_box .item1").css("display","none");
        $(".ss_box .item2").css("display","block");
    });
    $(".ss_box .item2").click(function(){
        clearInterval(intv);
        clearInterval(intv2);
        clearInterval(intv3);
        $(".vs.item1").prependTo($(".vs_box"));
        $(".vs.item1").addClass("on");
        $(".vs.item1").siblings().removeClass("on");
        $(".vs.item3").appendTo($(".vs_box"));
        $(".btn_txt_box").find(".btn_txt1").prependTo($(".btn_txt_box")).addClass("on");
        $(".btn_txt_box").find(".btn_txt1").siblings().removeClass("on");
        $(".btn_txt_box").find(".btn_txt3").appendTo($(".btn_txt_box"));
        video1.play();
        video2.play();
        video3.play();
        i=0;
        barAni();
        intv = setInterval( function(){ nextAni(); }, 7000);
        intv2 = setInterval ( function(){ barAni(); }, 7000);
        intv3 = setInterval( function() { txtAni(); }, 7000);
        $(".ss_box .item2").css("display","none");
        $(".ss_box .item1").css("display","block");
        console.log(i);
    });

    $(".gnb_box").on("mouseover", function(){
        $(this).stop().css("height", " 300px");
        $(".gnb_bg").stop().slideDown(300);
        $(".gnb_box").find(".sub_box").stop().slideDown(300);
    });
    $(".gnb_box").on("mouseleave", function(){
        $(this).stop().css("height", "70px");
        $(".gnb_bg").stop().slideUp(300);
        $(".gnb_box").find(".sub_box").slideUp(300);
    });
    $(".xi-cog").on("click", function(){
        $(this).css("display", "none");
        $(".sel").css("display","block");
        $(".xi-refresh").css("display","block");
    });
    $(".xi-refresh").on("click", function(){
        $(this).css("display", "none");
        $(".sel").css("display","none");
        $(".xi-cog").css("display","block");
    });
    $(".sear_btn").on("click", function(){
        $(".frm").fadeToggle(300);
    });

    $(".content_box li").eq(0).siblings().css("opacity","0.6");
    $(".content_box li").eq(0).css("opacity","1");
    
    $(".CBB").find(".CBleft").click(function(){
        $(".content_box li").eq(0).stop().animate({"margin-left":"-360px"}, 300, function(){
            $(".content_box li").eq(0).appendTo($(".content_box"));
            $(".content_box li").eq(8).css("margin-left", "2vw");
        });
        $(".content_box li").eq(1).siblings().css("opacity","0.6");
        $(".content_box li").eq(1).css("opacity","1");
    });
    $(".CBB").find(".CBright").click(function(){
        $(".content_box li").eq(8).prependTo($(".content_box"));
        $(".content_box li").eq(8).css("margin-left","-360px");
        $(".content_box li").eq(0).not(":animated").animate({"margin-left":"2vw"}, 300);
        $(".content_box li").eq(0).siblings().css("opacity","0.6");
        $(".content_box li").eq(0).css("opacity","1");
    });
    $(window).on("mousewheel DOMMouseScroll", function(e){
        var gw_ht = parseInt($(".gnb_wrap").offset().top);
        var ht = parseInt($("body").scrollTop());
        var eo = e.originalEvent.wheelDelta;
        if (eo<0 && gw_ht<50 && gw_ht<0) {
            $(".gnb_wrap").css("position","fixed").css("top","0").css("margin-top","0");
        } else if ( eo>0 && ht<1000 && gw_ht==0) {
            $(".gnb_wrap").css("position","relative").css("margin-top","-100px");
        }
        console.log(gw_ht);
        console.log(ht);
        if(eo<0 && ht>1800 && ht<2200) {
            $(".content2_box").find(".co1, .co2").addClass("on");
        } else if (eo<0 && ht>2400 && ht<3000) {
            $(".content2_box").find(".co3, .co4").addClass("on");
        } else if (eo<0 && ht>3000 ){
            $(".content2_box").find(".co5").addClass("on");
        }
        if(eo>0 && ht<1800) {
            $(".content2_box").find(".co1, .co2").removeClass("on");
        } else if (eo>0 && ht<2400 && ht>1800) {
            $(".content2_box").find(".co3, .co4").removeClass("on");
        } else if (eo>0 && ht<3000 && ht>2400 ){
            $(".content2_box").find(".co5").removeClass("on");
        }
        if(eo<0 && ht>800 && ht<1600){
            $(".content_wrap_Bg").css("width","90vw");
            $(".content_wrap .content_box").css("padding-top","5vw").css("opacity","1").css("z-index","7");
            $(".content_btn_box").css("left", "10vw").css("opacity","1");
        } else if (eo>0 && ht<800) {
            $(".content_wrap_Bg").css("width","0vw");
            $(".content_wrap .content_box").css("padding-top","0vw").css("opacity","0").css("z-index","-1");
            $(".content_btn_box").css("left", "-10vw").css("opacity","0");
        }
        
    });

    $(window).on("swipe", function(event){
        var gw_ht = parseInt($(".gnb_wrap").offset().top);
        var ht = parseInt($("body").scrollTop());
        var body = parseInt($("body").width());
        console.log(body);
        if( body < 767) {
            if(ht>300 && ht<900){
                $(".content_wrap_Bg").css("width","90vw");
                $(".content_wrap .content_box").css("padding-top","15vw").css("opacity","1").css("z-index","7");
                $(".content_btn_box").css("left", "10vw").css("opacity","1");
            } else if (ht>900 || ht<300) {
                $(".content_wrap_Bg").css("width","0vw");
                $(".content_wrap .content_box").css("padding-top","5vw").css("opacity","0").css("z-index","-1");
                $(".content_btn_box").css("left", "-10vw").css("opacity","0");
            }
            if(ht>1000 && ht<1600) {
                $(".content2_box").find(".co1, .co2").addClass("on");
            } else if (ht>1400 && ht<2000) {
                $(".content2_box").find(".co3, .co4").addClass("on");
            } else if ( ht>1800 ){
                $(".content2_box").find(".co5").addClass("on");
            }
            if(ht<1000) {
                $(".content2_box").find(".co1, .co2").removeClass("on");
                $(".content2_box").find(".co3, .co4").removeClass("on");
                $(".content2_box").find(".co5").removeClass("on");
            }
        }
    });

    var k = 1;
    $(".gnb_btn_box").click(function(){
        if(k==1){
            $(".mo_hd_wrap").fadeIn(300);
        } else {
            $(".mo_hd_wrap").fadeOut(300);
        }
        k = k*-1;
    });
    $(".content_tit_box h4").click(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
    $(".conBox_tit1").click(function(){
        $(".content_box1").slideDown(300);
        $(".content_box2").css("display","none");
        $(".content_box3").css("display","none");
        $(".content_box4").css("display","none");
    });
    $(".conBox_tit2").click(function(){
        $(".content_box2").slideDown(300);
        $(".content_box1").css("display","none");
        $(".content_box3").css("display","none");
        $(".content_box4").css("display","none");
    });
    $(".conBox_tit3").click(function(){
        $(".content_box3").slideDown(300);
        $(".content_box1").css("display","none");
        $(".content_box2").css("display","none");
        $(".content_box4").css("display","none");
    });
    $(".conBox_tit4").click(function(){
        $(".content_box4").slideDown(300);
        $(".content_box1").css("display","none");
        $(".content_box2").css("display","none");
        $(".content_box3").css("display","none");
    });
    $(".gnb_mid_fr li").click(function(){
        $(this).css("background", "#006098")
        $(this).children("a").css("color", "#f2f1f2");
        $(this).siblings().css("background", "#fff");
        $(this).siblings().children("a").css("color", "#000");
    });

    $(".gnb_mid_fr li").click(function(){
        var t = $(".gnb_mid_fr li");
        var idx = parseInt($(this).index())+1;
        $(".gnb_mid2_fr"+idx).slideDown(300);
        $(".gnb_mid2_fr"+idx).siblings().slideUp(300);
        console.log(idx);
    });
});