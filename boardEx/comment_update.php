<?php
  require_once 'preset.php';
  echo "<meta charset='utf-8'>";

  $w ='';
  $coNum = 'null';

  // second_depth 수정 삭제
  if(isset($_POST['w'])){
    $w = $_POST['w'];
    $coNum = $_POST['co_Num'];
  }
  //공통변수
  $bNum = $_POST['bnum'];
  $co_Password = $_POST['co_Password'];
  $sec_Password = sha1($co_Password);

  if($w !== 'd'){
    $co_Content = $_POST['co_Content'];
    if($w !== 'u'){
      $co_Id = $_POST['co_Id'];
    }
  }
  if(empty($w) || $w === 'w'){ // first_depth 또는 second_depth 댓글 작성시
    $msg = '작성';
    $sql = "INSERT INTO comment_free VALUES (null, '$bNum', $coNum, '$co_Content', '$co_Id', '$sec_Password')";
    if(empty($w)){
      $result = $mysqli->query($sql);
      $coNum = $mysqli->insert_id;
      $sql = 'UPDATE comment_free SET co_order=co_num WHERE co_num='.$coNum;
    }
  }else if($w === 'u'){
    $msg = '수정';

    $sql = 'SELECT COUNT(*) AS cnt FROM comment_free WHERE co_password='.$sec_Password.' AND co_num='.$coNum;
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    if(empty($row['cnt'])){
      // 비밀번호와 넘버값이 동일한 경우가 아니라면 종료
      ?>
      <script>
        alert('비밀번호가 맞지않습니다.');
        history.back();
      </script>
    <?php
      exit;
    }
    $sql = "UPDATE comment_free SET co_content='.$co_Content.' WHERE co_num=".$coNum;
  } else if($w === 'd'){
    //삭제
    $msg = '삭제';

    $sql = 'SELECT COUNT(*) AS cnt FROM comment_free WHERE co_password='.$sec_Password.' AND co_num='.$coNum;
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();
    if(empty($row['cnt'])){
      // 비밀번호와 넘버값이 동일한 경우가 아니라면 종료
      ?>
      <script>
        alert('비밀번호가 맞지않습니다.');
        history.back();
      </script>
    <?php
      exit;
    }
    $sql = "DELETE comment_free WHERE co_password='.$sec_Password.' AND co_num=".$coNum;
  }else {
?>
    <script>
      alert('정상적인 경로를 이용해주세요.');
      history.back();
    </script>
<?php
  exit;
}
  $result = $mysqli->query($sql);
  if($result){
?>
    <script>
      alert('댓글이 정상적으로 <?php echo $msg?>되었습니다.');
      location.replace("<?php echo $url['root']; ?>boardEx/view.php?bnum=<?php echo $bNum?>");
    </script>
<?php
} else {
?>
  <script>
    alert('댓글 <?php $msg?>에 실패하였습니다.');
    history.back();
  </script>
<?php
  exit;
  }
?>
