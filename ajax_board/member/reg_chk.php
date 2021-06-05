<?php
  include_once '../common.php';
  if(!defined('__seongho7167__')){
    exit;
  }else {
    echo "<meta charset='utf-8'>";
    $registration = $_POST['registration']; // 비정상 접근 차단
    if($registration != '1'){
      echo '<meta charset="utf-8">';
    	echo '<script>alert("올바른 접속경로를 이용해주세요!");history.back();</script>';
    	return false;
    }
  }
  require_once '../ajax/secuChk.php';
  if($_POST['u_id'] == ''){
    echo '<script>alert("id는 빈 값일 수 없습니다.");history.back();</script>';
    exit;
  } else if($_POST['u_password'] == ''){
    echo '<script>alert("password는 빈 값일 수 없습니다.");history.back();</script>';
    exit;
  } else if($_POST['u_name'] == ''){
    echo '<script>alert("이름은 빈 값일 수 없습니다.");history.back();</script>';
    exit;
  } else if($_POST['u_email'] == ''){
    echo '<script>alert("이메일은 빈 값일 수 없습니다.");history.back();</script>';
    exit;
  }
  $b_mem_id = secuChk($_POST['u_id']);
  $b_mem_pw = secuChk($_POST['u_password']);
  $b_mem_nm = secuChk($_POST['u_name']);
  $b_mem_gender = secuChk($_POST['u_gender']);
  $b_mem_email = secuChk($_POST['u_email']);
  $b_mem_regdate = secuChk($_POST['u_regdate']);

  require_once 'mem_enc_pw.php';
?>
