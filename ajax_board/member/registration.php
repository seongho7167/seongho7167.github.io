<?php
	include_once '../common.php';
	if(!defined('__seongho7167__')){
		echo '<meta charset="utf-8">';
		echo '<script>alert("정상적인 접속경로를 이용해주세요!");history.back();</script>';
	}
  $registration = '1';
?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
	<style>
    * {margin:0;padding:0}
    .member_container {width:21%;min-width:402px;margin:50px auto}
    div {margin-bottom:5px}
    label {display:inline-block;width:110px;margin-right:10px}
    span {display:inline-block;margin-right:10px}
    #u_gender + label {width:auto}
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
	<div class='member_container'>
		<h3>회원가입</h3>
		<form class='member_wrap' method='POST' action='reg_chk.php'>
		<div>
        <label for='u_id'>ID</label><span>:</span><input type='text' id='u_id' name='u_id' placeholder='영문 또는 숫자로 4~12자' style='margin-right:10px' autofocus/>
        <div id='u_id_chk'>ID중복 및 유효성을 자동으로 감지합니다.</div>
      </div>
      <div><label for='u_password'>Password</label><span>:</span><input type='password' id='u_password' name='u_password' placeholder='영문, 숫자로 6~20자' /></div>
      <div><label for='u_password2'>Password 확인</label><span>:</span><input type='password' id='u_password2' placeholder='비밀번호 재입력' /></div>
      <div id='u_password_chk'>비밀번호를 입력해주세요.</div>
      <div><label for='u_name'>이름</label><span>:</span><input type='text' id='u_name' name='u_name' /></div>
      <div id='u_name_chk'>이름을 입력해주세요.</div>
      <div><label>성별</label>
      <input type='radio' id='u_gender' name='u_gender' value='man' checked /><label for='u_gender'>남성</label>
      <input type='radio' id='u_gender2' name='u_gender' value='woman'/><label for='u_gender2'>여성</label></div>
      <div><label for='u_email'>이메일</label><span>:</span><input type='text' id='u_email' name='u_email' /></div>
      <div id='u_email_chk'>이메일을 입력해주세요.</div>
      <input type='hidden' id='u_regdate' value='<?php echo date("Y-m-d H:i:s"); ?>' name='u_regdate' />
      <input type="hidden" name="registration" value="<?php echo $registration; ?>">
      <div><input type='submit' value='submit' id='submit_btn'></div>
		</form>
    <?php
      $file_nm = '.js';
      $mem_input_data = 'mem_input_data_chk'.$file_nm;
      echo '<script src="'.$mem_input_data.'"></script>';
    ?>
	</div>
  </body>
</html>
