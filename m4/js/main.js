$(document).ready(function(){
    var a=1;
    $("#sear_btn1").click(function(event){
        if(a==1){
            $(".frm1").css("height","14vh");
        } else {
            $(".frm1").css("height","0");
            $(".search_box").css("left","-120%");
        }
        a = a*-1;
    });
    var b=1;
    $("#sear_btn2").click(function(){
        if(b==1){
            $(".search_box").css("left","0");
        } else {
            $(".search_box").css("left","-120%");
        }
        b= b*-1;
    });
    var c= 1;
    $(".gnb_btn_box").click(function(){
        if ( c==1 ){
            $(".gnb_btn_box .bar1").css("transform","rotate(-45deg)").css("top","14px");
            $(".gnb_btn_box .bar2").css("transform","rotate(45deg)").css("top","14px");
        } else {
            $(".gnb_btn_box .bar1").css("transform","rotate(0deg)").css("top","7px");
            $(".gnb_btn_box .bar2").css("transform","rotate(0deg)").css("top","20px");
        }
        c = c*-1;
    });
    var d=1;
    $(".id_fr").click(function(){
        if(d==1){
            $(".id_ck").css("color","#ea5514");
        } else {
            $(".id_ck").css("color","#fff");
        }
        d=d*-1;
    });
    var e=1;
    $(".pw_fr").click(function(){
        if(e==1){
            $(".pw_ck").css("color","#ea5514");
        } else {
            $(".pw_ck").css("color","#fff");
        }
        e=e*-1;
    });
    var f=1;
    $(".gnb_btn_box").click(function(){
        if(f==1){
            $(".log_wrap").css("transform","scale(1)");
        } else {
            $(".log_wrap").css("transform","scale(0)").animate({"margin-left":"0"},300);
            $(".join_wrap").css("transform","scale(0.8)").delay(500).animate({"left":110+"vw"}, 500);
            }
        f=f*-1;
    });
    $(".join_btn").click(function(){
        $(".log_wrap").css("transform","scale(0.8)").animate({"margin-left":"-120%"}, 300, function(){
            $(".join_wrap").animate({"left":"0"}, 500);
        });
        setTimeout(function(){
            $(".join_wrap").css("transform","scale(1)");
        }, 1500);
    })
    
});