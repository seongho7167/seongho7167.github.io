<?php
  require_once '../config.php';
  $con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
  require_once '../ajax/secuChk.php';
  $chk_id = secuChk($_POST['u_id']);
  $sql = 'SELECT COUNT(*) AS cnt FROM boardEx_member WHERE b_mem_id ="'.$chk_id.'"';
  $res = mysqli_query($con,$sql);
  $row = mysqli_fetch_assoc($res);
  if( $row['cnt'] > 0){
    $data = 'failure';
    echo($data);
  } else {
    $data = 'success';
    echo($data);
  }
?>
