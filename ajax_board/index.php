<?php
  include_once './common.php';
  if(!defined('__seongho7167__')){ echo "<meta charset='utf-8'>"; exit('정상적인 접속경로를 이용해주세요!!!');}
  require_once './conn.php';
  session_start();
?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      * {text-align:center;}
      .mem-box > span {cursor:pointer;position:relative;padding:0 15px 0 10px}
      .mem-box > span:nth-of-type(3) {padding-right:0}
      .mem-box > span:after {content:'|';position:absolute;top:0;right:0;color:#000;}
      .mem-box > span:nth-of-type(3):after {content:'';}
      .mem-box > span:hover {text-decoration:underline;color:#999}
      .mem-box #logout_btn:after {content:''}
    </style>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="crossorigin="anonymous"></script>
    <script src="./func/post_goto.js"></script>
    <script src="./nav/nav.js"></script>
    <script type="text/javascript">
        function mem_login(){
          var locate = './member/login.php';
          location.href = locate;
        }
        function mem_registration(){
          var locate = './member/reg_priv_chk.php';
          location.href = locate;
        }
        function mem_logout(){
          var locate = './member/logout.php';
          location.href = locate;
        }
    </script>
  </head>
  <body>
    <div class='intro-box'>
    <?php if($_SESSION['comp_login'] == 'login'){ ?>
      <p>
        <?php require_once './nav/nav.php';  ?>
        <?php echo $_SESSION['mem_nm'].'님 환영합니다~!'?>
      </p>
    <?php }else { ?>
      <p>Hello World</p>
      <p>PHP 연습 게시판에 오신것을 환영합니다</p>
      <p>원활한 게시판 이용을 위해서는 로그인이 필요합니다.<br /> 방문자로 게시판을 이용할 경우 게시판 사용에 제한이 있습니다.</p>
    <?php } ?>
    </div>
    <div class='mem-box'>
    <?php if($_SESSION['comp_login'] == 'login'){ ?>
      <span onclick='mem_logout();' id='logout_btn'>logout</span>
    <?php }else { ?>
      <span onclick='mem_login();'>login</span>
      <span onclick='mem_registration();'>registration</span>
      <span id='guest_btn'>guest</span>
      <script>
        $("#guest_btn").click(function(){
  			  var url = './member/guest.php';
          var params = {'guest':'10'};
          post_goto(url,params);
        });
      </script>
    <?php } ?>
    </div>
    <?php
      if($_SESSION['comp_login'] == 'login'){
      require_once './free_board/list.php';
    } ?>
	<!--
	<script>
		function timestamp(){
			setInterval(function(){
				$.post(
					'./timestamp.php',
					function(json){
					var seperate = json.split(' ');
					var date = seperate[0].split('-');
					var time = seperate[1].split(':');
					console.log(date);
					console.log(time);
					}
				);
			}, 1000);
		}
 timestamp();
	</script>
	-->
  </body>
</html>
