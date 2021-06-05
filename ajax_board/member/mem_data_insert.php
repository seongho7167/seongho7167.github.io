<?php
if(!defined('__seongho7167__')){
  exit;
}
  require_once '../conn.php';
  echo "<meta charset='utf-8'>";

  $sql = 'INSERT INTO boardEx_member VALUES(null, "'.$b_mem_id.'", "'.$b_mem_pw.'", "'.$b_mem_nm.'", "'.$b_mem_gender.'", "'.$b_mem_email.'", "'.$b_mem_regdate.'")';
  $res = mysqli_query($con,$sql);

  require_once 'comp_registration.php';
?>
