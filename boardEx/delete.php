<?php
  require_once 'preset.php';
  echo "<meta charset='utf-8'>";

  if(isset($_GET['bnum'])){
    $bNum = $_GET['bnum'];
  }
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />

</head>
<body>
  <article class="boardArticle">
    <h3>자유게시판 레코드 삭제</h3>
    <title>자유게시판 글삭제</title>
    <?php
      if(isset($bNum)){
        $sql = 'select count(b_num) as cnt from board_free where b_num='.$bNum;
        $result = $mysqli->query($sql);
        $row = $result->fetch_assoc();
        if(empty($row['cnt'])){
    ?>
          <script>
            alert('삭제할 글이 존재하지 않습니다.');
            history.back();
          </script>
    <?php
      exit;
        }
        $sql = 'select b_title from board_free where b_num='.$bNum;
        $result = $mysqli->query($sql);
        $row = $result->fetch_assoc();
    ?>
    <div id="boardDelete">
      <form action="<?php echo $url['root'] ?>boardEx/delete_update.php" method="post">
        <input type="hidden" name="bnum" value="<?php echo $bNum ?>">
        <table>
          <caption class="readHide">자유게시판 글 삭제</caption>
          <thead>
            <tr>
              <th scope="col" colspan="2">글삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">글제목</th>
              <td><?php echo $row['b_title']; ?></td>
            </tr>
            <tr>
              <th scope="row"><label for="bPassword">비밀번호</label></th>
              <td><input type="password" name="bPassword" id="bPassword"></td>
            </tr>
          </tbody>
        </table>
        <div class="btnSet">
          <button type="submit" class="btnSubmit btn">삭제</button>
          <a href="<?php echo $url['root']; ?>boardEx/list.php" class="btnList btn">목록</a>
        </div>
      </form>
    </div>
    <?php
      exit;
      }
    ?>
  </article>
</body>
</html>
