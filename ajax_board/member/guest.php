<?php
  echo "<meta charset='utf-8'>";
  $guest = $_POST['guest']; // 비정상 접근 차단
  if($guest != '10'){
    exit('비정상적인 접속경로 입니다. 정상적인 경로로 접속해주세요!!!');
  }

  require_once '../ajax/secuChk.php';

  $b_mem_idx = secuChk($_POST['guest']);

	require_once 'guest_data_match.php';
?>
