<?php
  include_once '../common.php';
  if(!defined('__seongho7167__')) exit('비정상적인 접속경로 입니다. 정상적인 경로로 접속해주세요!!!');
?>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>회원가입 개인정보 이용 확인</title>
  </head>
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="crossorigin="anonymous"></script>
  <style>
    h2 {text-align: center}
    .text-box {width:50%;margin:0 auto;}
  </style>
  <body>
    <h2>개인정보 이용약관</h2>
    <div class='text-box'>
      <textarea rows="20" cols="100" style='resize:none;width:100%'>
        <?php
          $file_open = fopen('../text_files/private.txt', 'r') or die('개인정보 이용 약관을 읽어올 수 없습니다. 관리자에게 문의하세요!');
          while(!feof($file_open)){
            echo fgets($file_open);
          }
        ?>
      </textarea>
      <form class='btn-box' action="../member/registration.php" method="POST">
		<input type='hidden' value='agr_chk_ok' name='hidden_chk' />
        <input type="checkbox" id='agr1' name="agr1" value="agr1" />
        <label for="agr1">위 개인정보 이용약관을 확인하였고 이에 동의합니다.</label>
        <div>
          <input type="submit" name="Agree" value="Agree" />
          <input type="button" name="Cancel" value="Cancel" onclick='goBack();' />
        </div>
        <script>
          $('input[type="submit"][name="Agree"]').click(function(){
            if(!$('#agr1').is(':checked') == true){
              alert('이용약관에 동의 체크 해주시기 바랍니다.');
            }
          });
          function goBack(){
            history.back();
          }
        </script>
      </form>
    </div>
  </body>
</html>
