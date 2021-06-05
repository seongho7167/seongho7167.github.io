<?php
  include_once '../common.php';
  if(!defined('__seongho7167__')) exit();

  require_once '../config.php';
  $con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
  session_start();
  echo "<meta charset='utf-8'>";

  echo $_SESSION['mem_nm'].'님 로그아웃 되었습니다.';

  session_destroy();
  mysqli_close($con);
  echo "<meta http-equiv='refresh' content='1; url=http://seongho7167.dothome.co.kr/php'>";
?>
