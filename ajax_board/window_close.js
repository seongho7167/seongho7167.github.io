<script>
$(document).ready(function(){
  var closing_window = false;
    $(window).on('focus',function(){
      closing_window = false;
    });
    $(window).on('blur',function(){
      closing_window = true;
      if(!document.hidden){
        closing_window = false;
      }
      $(window).on('resize',function(e){
        closing_window = false;
      });
      $(window).off('resize');
    });
    $('html').on('mouseleave',function(){
      closing_window = true;
    });
    $('html').on('mouseenter',function(){
      closing_window = false;
    });
    $(document).on('keydown',function(e){
      if(e.keyCode == 91 || e.keyCode == 18){
        closing_window = false;
      }
      if(e.keyCode == 116 || (e.ctrlKey && e.keyCode == 82)){
        closing_window == false;
      }
    });
    $(document).on('click','a',function(){
      closing_window = false;
    });
    $(document).on('click','button',function(){
      closing_window = false;
    });
    $(document).on('submit','form',function(){
      closing_window = false;
    });
    $(document).on('click','input[type="submit"]',function(){
      closing_window = false;
    });
    var doClosingWindow = function(){
      $.ajax({
        type: 'POST',
        url: './member/logout.php',
        async: 'false'
      });
      return;
    };
    console.log(closing_window);
    $(window).on('beforeunload',function(e){
        e.alert('로그인이 종료됩니다.');
        doClosingWindow();
    });
});
</script>
