<?php
  $close = mysqli_close($con);
  if($close){
    echo '데이터베이스 종료 성공!';
  } else {
    echo '데이터베이스 종료 실패...ㅠㅠ';
  }
?>