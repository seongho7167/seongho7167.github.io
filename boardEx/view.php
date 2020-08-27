<?php
  require_once 'preset.php';

  $bNum = $_GET['bnum'];

  if(!empty($bNum) && empty($_COOKIE['board_free_'.$bNum])){
    $sql = 'update board_free set b_hit=b_hit+1 where b_num='.$bNum;
    $result = $mysqli->query($sql);
    if(empty($result)){
      ?>
      <script>
        alert('오류가 발생했습니다.');
        history.back();
      </script>
      <?php
    } else {
      setcookie('board_free_'.$bNum, TRUE, time()+1, '/');
    }
  }

  $sql = 'select b_title, b_content, b_date, b_hit, b_id from board_free where b_num='.$bNum;
  $result = $mysqli->query($sql);
  $row = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>자유게시판 뷰페이지</title>
  <style>

  </style>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <article class="board">
    <h3>자유게시판 뷰페이지</h3>
    <div id="boardView">
      <h3 id="boardTitle"><?php echo $row['b_title']; ?></h3>
      <div id="boardInfo">
        <span id="boardID">작성자 : <?php echo $row['b_id']; ?></span>
        <span id="boardDate">작성일 : <?php echo $row['b_date']; ?></span>
        <span id="boardHit">조회수 : <?php echo $row['b_hit']; ?></span>
      </div>
      <div id="boardContent"><?php echo $row['b_content']; ?></div>

    </div>
    <div class="btnSet">
      <a href="<?php echo $url['root']; ?>boardEx/write.php?bnum=<?php echo $bNum?>">수정</a>
      <a href="<?php echo $url['root']; ?>boardEx/delete.php?bnum=<?php echo $bNum?>">삭제</a>
      <a href="<?php echo $url['root']; ?>boardEx/list.php">목록</a>
    </div>
  </article>
  <?php
    include_once 'comment.php';
  ?>
</body>
</html>
