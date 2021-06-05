<?php
  require_once '../config.php';
  $con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
  echo "<meta charset='utf-8'>";

  $sql = 'SELECT * FROM boardEx_member WHERE `b_mem_id` = "'.$b_mem_id.'"';
  $res = mysqli_query($con,$sql);
  $row = mysqli_fetch_assoc($res);
  $regdate = $row['b_mem_regdate'];
  $b_mem_pw = $b_mem_pw.$regdate;
  $b_mem_idx = $row['b_mem_idx'];
  $b_mem_nm = $row['b_mem_nm'];
  $b_mem_mail = $row['b_mem_mail'];

  $sql = 'SELECT * FROM boardEx_member WHERE `b_mem_id` = "'.$b_mem_id.'" AND `b_mem_pw` = "'.$b_mem_pw.'"';
  $res = mysqli_query($con,$sql);
  $cnt = mysqli_num_rows($res);
  if($cnt > 0){
    require_once 'comp_login.php';
  } else {
	echo '<script>alert("password를 다시 확인해주세요.");history.back();</script>';
    exit;
  }
?>
