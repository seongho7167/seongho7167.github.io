<?php
  require_once 'preset.php';
  echo "<meta charset='utf-8'>";

  if(isset($_POST['bnum'])){
    $bNum = $_POST['bnum'];
  }

  $bPassword = $_POST['bPassword'];
  $encryped_pass = sha1($bPassword);

  if(isset($bNum)){
    $sql = 'select count(b_password) as cnt from board_free where b_password="'.$encryped_pass.'" and b_num='.$bNum;
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();

    if($row['cnt']){
      $sql = 'delete from board_free where b_num='.$bNum;
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
  }

  $result = $mysqli->query($sql);
  if($result){
    $msg = '정상적으로 글이 삭제되었습니다.';
    $replaceURL = "http://seongho7167.dothome.co.kr/boardEx/list.php";
  }else {
    $msg = '글을 삭제에 실패하였습니다.';
?>
  <script>
    alert("<?php echo $msg; ?>");
    history.back();
  </script>
<?php
  exit;
  }
?>
<script>
  alert("<?php echo $msg; ?>");
  location.replace("<?php echo $replaceURL ?>");
</script>
