<?php
if(!defined('__seongho7167__')){echo "<meta charset='utf-8'>"; exit('정상적인 접속경로를 이용해주세요!!!');}
  require_once '../ajax/secuChk.php';
  $bofr_uid = secuChk($_GET['bofr_uid']);
  $sql = 'SELECT * FROM board_free WHERE `bofr_uid` = "'.$bofr_uid.'"';
  $res = mysqli_query($con,$sql);
  $row = mysqli_fetch_array($res);
?>
  <div class='view_title'>
    <?php echo $row['bofr_title']; ?>
  </div>
  <div class='view_author'>
    <?php echo $row['bofr_mem_uid']; ?>
  </div>
  <div class='view_regdate'>
    <?php echo $row['bofr_date']; ?>
  </div>
  <div class='view_hit'>
      <?php echo $row['bofr_hit']; ?>
  </div>
  <div class='view_content'>
    <?php echo $row['bofr_content']; ?>
  </div>
