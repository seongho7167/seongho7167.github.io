<?php
  require_once('preset.php');
  echo "<meta charset='utf-8'>";

  if(isset($_POST['bnum'])){
    $bNum = $_POST['bnum'];
  }

  if(empty($bNum)){
    $bID = $_POST['bID'];
    $date = date('Y-m-d H:m:s');
  }

  $bPassword = $_POST['bPassword'];
  $encryped_pass = sha1($bPassword);
  $bTitle = $_POST['bTitle'];
  $bContent = $_POST['bContent'];

  if(isset($bNum)){
    $sql = 'select count(b_password) as cnt from board_free where b_password="'.$encryped_pass.'" and b_num='.$bNum;

    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    if($row['cnt']){
      $sql = 'update board_free set b_title='.$bTitle.', b_content='.$bContent.' where b_num='.$bNum;
      $msgState = '수정';
    }else {
      $msg = '비밀번호가 틀렸습니다.';
    ?>
      <script>
        alert("<?php echo $msg; ?>");
        history.back();
      </script>
      <?php
        exit;
    }
  } else{
    $sql = "INSERT INTO board_free (b_num, b_title, b_content, b_date, b_hit, b_id, b_password)
    VALUES (null, '$bTitle','$bContent','$date',0,'$bID', '$encryped_pass')";
    $msgState = '생성';
  }

  if(empty($msg)){
    $result = $mysqli->query($sql);
    if($result){
      $msg = '정상적으로 글이 '.$msgState.'되었습니다.';
      if(empty($bNum)){
        $bNum = $mysqli->insert_id;
      }
      $replaceURL = "http://seongho7167.dothome.co.kr/boardEx/view.php?bnum=".$bNum;
    }else {
      $msg = '글을'.$msgState.'하지 못했습니다.';
      ?>
      <script>
        alert("<?php echo $msg ?>")
        history.back();
      </script>
      <?php
        exit;
    }
  }
  ?>
  <script>
    alert("<?php echo $msg; ?>");
    location.replace("<?php echo $replaceURL ?>");
  </script>
