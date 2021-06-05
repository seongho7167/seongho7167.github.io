<?php
  require_once '../config.php';
  $con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
  echo "<meta charset='utf-8'>";

  $sql = 'SELECT * FROM boardEx_member WHERE `b_mem_idx` = "'.$b_mem_idx.'"';
  $res = mysqli_query($con,$sql);
  $cnt = mysqli_num_rows($res);
  if($cnt > 0){
	  $row = mysqli_fetch_array($res);
	  $b_mem_id = $row['b_mem_id'];
		$b_mem_nm = $row['b_mem_nm'];
    require_once 'comp_login.php';
  } else {
	  echo '<script>alert("방문객 로그인에 문제가 있습니다. 관리자에게 문의주세요.");history.back();</script>';
    exit;
  }
?>
