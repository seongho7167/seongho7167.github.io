<?php
  require_once ('preset.php');

  if(isset($_GET['bnum'])){
    $bNum = $_GET['bnum'];
  }

  if(isset($bNum)){
    $sql = 'select b_title, b_content, b_date, b_hit, b_id from board_free where b_num='.$bNum;
    $result = $mysqli->query($sql);
    $row = $result->fetch_assoc();
  }
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>자유게시판 글쓰기 페이지 만들기</title>
  <style>

  </style>
</head>
<body>
  <article class="board">
    <h3>자유게시판 글쓰기</h3>
    <div id="boardWrite">
      <form action="<?php echo $url['root']; ?>boardEx/write_update.php" method="post">
        <?php
          if(isset($bNum)){
            echo '<input type="hidden" name="bnum" value="'.$bNum.'">';
          }
        ?>
        <table>
          <caption class="readHide">자유게시판 글쓰기</caption>
          <tbody>
            <tr>
              <th scope="row"><label for="bID">아이디</label></th>
              <td class="id">
                <?php 
                  if(isset($bNum)){
                    echo $row['b_id'];
                  } else {
                ?>
                <input type="text" name="bID" id="bID">
                  <?php } ?>
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="bPassword">비밀번호</label></th>
              <td class="password"><input type="password" name="bPassword" id="bPassword"></td>
            </tr>
            <tr>
              <th scope="row"><label for="bTitle">제목</label></th>
              <td class="title">
                <input type="text" name="bTitle" id="bTitle" value="<?php echo isset($row['b_title'])?$row['b_title']:null ?>">
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="bContent">내용</label></th>
              <td class="content"><textarea name="bContent" id="bContent"><?php echo isset($row['b_content'])?$row['b_content']:null; ?></textarea></td>
            </tr>
          </tbody>
        </table>
        <div class="btnSet">
          <button type="submit" class="btnSubmit btn"><?php echo isset($bNum)? '수정':'작성'; ?></button>
          <a href="<?php echo $url['root']; ?>boardEx/list.php">목록</a>
        </div>
      </form>
    </div>
  </article>
</body>
</html>
