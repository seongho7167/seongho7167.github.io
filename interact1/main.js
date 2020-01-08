$(document).ready(function(){
    $(".gnb_btn_box").click(function(){
        $(".gnb_wrap").slideToggle(500);
    });
    var p = $(".page");
    var ofs = new Array;
    var pos = new Array;
    
    p.each(function(index){
        ofs[index] = $(this).offset();
        pos[index] = parseInt(ofs[index].top);
        pos[0] = 0;
        console.log(pos[index]);
    });
    p.on("mousewheel DOMMouseScroll", function(e){
        var idx = $(this).index();
        var eo = e.originalEvent.wheelDelta;
        console.log(idx);
        if( eo<0 ) {
            if( p.eq(idx+1) != undefined && idx<10 ) {
                $("body, html").not(":animated").animate({"scrollTop":pos[idx]+"px"});
                $(".cir").eq(idx).addClass("on");
                $(".cir").eq(idx).siblings().removeClass("on");
                $(".txt").eq(idx).addClass("on");
                $(".txt").eq(idx).siblings().removeClass("on");
                $(".page"+idx).addClass("on");
                $(".page"+idx).siblings().removeClass("on");
                $(".txt").eq(idx).addClass("st");
                $(".txt").eq(idx).siblings().removeClass("st");
                $(".bar_box").find(".bar"+(idx+1)).addClass("st");
                $(".bar_box").find(".bar"+(idx+1)).siblings().removeClass("st");
            }
        }else if (p.eq(idx) != undefined && idx>1 ) {
            $("body, html").not(":animated").animate({"scrollTop":pos[idx-2]+"px"});
            $(".cir").eq(idx-2).addClass("on");
            $(".cir").eq(idx-2).siblings().removeClass("on");
            $(".txt").eq(idx-2).addClass("on");
            $(".txt").eq(idx-2).siblings().removeClass("on");
            $(".page"+(idx-2)).addClass("on");
            $(".page"+(idx-2)).siblings().removeClass("on");
            $(".txt").eq(idx-2).addClass("st");
            $(".txt").eq(idx-2).siblings().removeClass("st");
            $(".bar_box").find(".bar"+(idx-1)).addClass("st");
            $(".bar_box").find(".bar"+(idx-1)).siblings().removeClass("st");
        }
    });
    $(".cir_box span").click(function(){
        var cir_idx = $(this).index();
        $("body, html").not(":animated").animate({"scrollTop":pos[cir_idx]+"px"}, 500);
        $(".cir").eq(cir_idx).addClass("on");
        $(".cir").eq(cir_idx).siblings().removeClass("on");
        $(".txt").eq(cir_idx).addClass("on");
        $(".txt").eq(cir_idx).siblings().removeClass("on");
        $(".page"+cir_idx).addClass("on");
        $(".page"+cir_idx).siblings().removeClass("on");
        $(".txt").eq(cir_idx).addClass("st");
        $(".txt").eq(cir_idx).siblings().removeClass("st");
        $(".bar_box").find(".bar"+(cir_idx+1)).addClass("st");
        $(".bar_box").find(".bar"+(cir_idx+1)).siblings().removeClass("st");
    });
    $(".txt_box span").click(function(){
        var txt_data = $(this).attr("data-txt");
        $("body, html").not(":animated").animate({"scrollTop":pos[txt_data]+"px"}, 500);
        $(".cir").eq(txt_data).addClass("on");
        $(".cir").eq(txt_data).siblings().removeClass("on");
        $(".txt").eq(txt_data).addClass("on");
        $(".txt").eq(txt_data).siblings().removeClass("on");
        $(".page"+txt_data).addClass("on");
        $(".page"+txt_data).siblings().removeClass("on");
    });
    $(".txt").on("mouseover", function(){
        var txt_idx= $(this).index();
        $(".txt").eq(txt_idx).addClass("st");
        $(".txt").eq(txt_idx).siblings().removeClass("st");
        $(".bar_box").find(".bar"+(txt_idx+1)).addClass("st");
        $(".bar_box").find(".bar"+(txt_idx+1)).siblings().removeClass("st");
    });
    
});
