<?php
  include_once '../common.php';
  if(!defined('__seongho7167__')){
    echo '<meta charset="utf-8">';
    echo '<script>alert("정상적인 접속경로를 이용해주세요!");history.back();</script>';
  }
  $login = '1';
?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
	<style>
    * {margin:0;padding:0}
	.login_container {width:21%;min-width:402px;margin:50px auto}
	form {border: 1px solid #999;padding:15px 20px;border-radius:3px}
	input[type="text"], input[type="password"] {border:0;border-bottom:1px solid #999;width:210px}
	input[type="password"] {margin-top:15px}
	label {display:inline-block;width:110px}
    span {display:inline-block;margin-right:10px}
	#submit_btn {background-color:transparent;border:0;cursor:pointer;margin: 0 20px 0 0}
	#submit_btn:hover {color:#999;text-decoration:underline}
	div:nth-of-type(3) {text-align:right}
	#u_id_chk {height:14px;font-size:13px;text-indent:130px;}
	</style>
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="crossorigin="anonymous"></script>
  <script>
  //타겟 태그 내부에 텍스트 삽입
	var text_view = function(tar,content,color){
		$(tar).text(content).css('color',color);
	};
  </script>
  </head>
  <body>
	<div class='login_container'>
		<h3 style='text-align:center;margin-bottom:15px'>로그인</h3>
		<form class='login_wrap' method='POST' action='login_chk.php'>
			<div>
				<label for='u_id'>ID</label><span>:</span>
				<input type='text' id='u_id' name='u_id' placeholder='ID' style='margin-right:10px' autofocus/>
				<div id='u_id_chk'></div>
			</div>
			<div>
				<label for='u_password'>Password</label><span>:</span>
				<input type='password' id='u_password' name='u_password' placeholder='Password' />
			</div>
			<input type='hidden' id='u_regdate' value='<?php echo date("Y-m-d H:i:s"); ?>' name='u_regdate' />
			<input type="hidden" name="login" value="<?php echo $login; ?>">
			<div>
				<input type='submit' value='submit' id='submit_btn'>
			</div>
		</form>
		<?php
		  $file_nm = '.js';
		  $mem_input_data = 'login_id_chk'.$file_nm;
		  echo '<script src="'.$mem_input_data.'"></script>';
		?>
	</div>
  </body>
</html>
