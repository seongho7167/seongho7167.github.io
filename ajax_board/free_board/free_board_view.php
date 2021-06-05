<?php
require_once '../common.php';
if(!defined('__seongho7167__')){echo "<meta charset='utf-8'>"; exit('정상적인 접속경로를 이용해주세요!!!');}
  require_once '../config.php';
  $con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
  session_start();
  if($_SESSION['comp_login'] != 'login'){
	header("Location: http://seongho7167.dothome.co.kr/php");
	return false;
  }
?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="crossorigin="anonymous"></script>
    <!--<script src='./window_close.js'></script>-->
    <style>
      * {text-align:center}
    </style>
    <script type="text/javascript">
        function mem_logout(){
          var locate = '../member/logout.php';
          location.href = locate;
        }
    </script>
  </head>
  <body>
    <?php
      $page_num = $_GET['page_num'];
    ?>
    <input type="hidden" name="page_num" value="<?php echo $page_num; ?>" />
    <div class='intro-box'>
    <?php if($_SESSION['comp_login'] == 'login'){ ?>
      <p>
        <?php echo $_SESSION['mem_nm'].'님 '.$_GET['row_no'].'번째 게시물 뷰로 이동했습니다.'?>
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
          var guest_hidden = '<input type="hidden" id="guest" name="guest" value="10" />';
          $(this).after(guest_hidden);
		  function guest(){
			  var guest_val = $("#guest").val();
			  var locate = './member/guest.php?guest='+guest_val;
			  location.href = locate;
			}
			guest();
        });
      </script>
    <?php } ?>
    </div>
    <div class='container'>
      <?php require_once 'call_free_board_view.php'; ?>
    </div>
  </body>
</html>
