$(document).ready(function(){
    // 네비게이션 어둠상자
    $(".gnb_bc").click(function(){
        $(".ckBox").prop("checked", false);
    });
    //어바웃 내용박스 
    $(".about_container").on("mouseover", function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
    // 시계 
    var second = document.getElementById("sec");
    function clock(){
        var time=new Date();
        var ss = time.getSeconds();
        ss=ss*360/60;
        second.style.transform = "rotate("+ss+"deg)";
    }
    setInterval(function(){ clock(); }, 1000)
    clock();

    var time = document.getElementById("time");
    function clock2(){
        var t = new Date();
        var h = t.getHours();
        var ampm;
        if(h>=12) {
            ampm="PM"; h=h-12; 
        } else {
            ampm="AM";
        }
        var m = t.getMinutes();
        var s = t.getSeconds(); 
        h = compare(h);
        m = compare(m);
        s = compare(s); 
        time.innerText = "방문하신 현재 시간은  "+h+":"+m+":"+s+"  "+ampm+"  입니다.";
    }
    function compare(x){
        if(x<10){
            return "0"+x;
        } else {
            return x;
        }
    }
    setInterval(function(){ clock2();}, 1000);

    // var p = $(".page");
    // var ofs = new Array;
    // var pos = new Array;
    
    // p.each(function(index){
    //     ofs[index] = $(this).offset();
    //     pos[index] = parseInt(ofs[index].top);
    //     pos[0] = 0;
    //     console.log(pos[index]);
    // });
    // p.on("mousewheel DOMMouseScroll", function(e){
    //     var idx = $(this).index();
    //     var eo = e.originalEvent.wheelDelta;
    //     console.log(idx);
    //     if( eo<0 ) {
    //         if( p.eq(idx+1) != undefined ) {
    //             $("body, html").not(":animated").animate({"scrollTop":pos[idx+1]+"px"});
    //         } 
    //     }else if (p.eq(idx) != undefined && idx>1 ) {
    //         $("body, html").not(":animated").animate({"scrollTop":pos[idx-2]+"px"});
    //     }
    // });
    // $(".gnb_box .gnb").click(function(){
    //     $("body, html").not(":animated").animate({"scrollTop":pos[4]+"px"});
    // });
});