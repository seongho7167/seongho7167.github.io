<?php
  $login = $_POST['login']; // 비정상 접근 차단
  if($login != '1'){
    echo '<meta charset="utf-8">';
  	echo '<script>alert("올바른 접속경로를 이용해주세요!");history.back();</script>';
  	exit();
  }
  if($_POST['u_id'] == ''){
    echo '<script>alert("id는 빈 값일 수 없습니다.");history.back();</script>';
    exit;
  } else if($_POST['u_password'] == ''){
    echo '<script>alert("password는 빈 값일 수 없습니다.");history.back();</script>';
    exit;
  }

  require_once '../ajax/secuChk.php';

  $b_mem_id = secuChk($_POST['u_id']);
  $b_mem_pw = secuChk($_POST['u_password']);

  require_once 'mem_enc_pw.php';
?>
