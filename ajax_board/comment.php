<?php
  $sql = 'SELECT * FROM comment_free WHERE co_num=co_order AND b_num='.$bNum;
  $result = $mysqli->query($sql);

?>
<div id="commentView">
  <form action="comment_update.php" method="post">
    <input type="hidden" name="bnum" value="<?php echo $bNum ?>">
    <?php
      while($row = $result->fetch_assoc()){
    ?>
    <ul class="first_depth">
      <li>
        <div id="co_<?php echo $row['co_num']?>" class="commentSet">
          <div class="commentInfo">
            <div class="commentId">
              작성자:<span class="co_Id"><?php echo $row['co_id']?></span>
            </div>
          </div>
          <div class="commentBtn">
            <a href="#" class="comt write">댓글</a>
            <a href="#" class="comt modify">수정</a>
            <a href="#" class="comt delete">삭제</a>
          </div>
        </div>
        <div class="commentContent">
          <?php echo $row['co_content'] ?>
        </div>
        <?php
          $sql2 = 'SELECT * FROM comment_free WHERE co_num!=co_order AND co_order='.$row['co_num'];
          $result2 = $mysqli->query($sql2);
          while($row2 = $result2->fetch_assoc()){
            ?>
            <ul class="second_depth">
              <li>
                <div id="co_<?php echo $row2['co_num']?>" class="commentSet">
                  <div class="commentInfo">
                    <div class="commentId">
                      작성자 : <span class="co_Id"><?php $row2['co_id']?></span>
                    </div>
                    <div class="commentBtn">
                      <a href="#" class="comt modify">수정</a>
                      <a href="#" class="comt delete">삭제</a>
                    </div>
                  </div>
                  <div class="commentContent">
                    <?php echo $row2['co_content'] ?>
                  </div>
                </div>
              </li>
            </ul>
          <?php }?>
      </li>
    </ul>
    <?php }?>
  </form>
</div>
<form action="<?php echo $url['root'] ?>boardEx/comment_update.php" method="post">
  <input type="hidden" name="bnum" value="<?php echo $bNum ?>">
  <table>
    <tbody>
      <tr>
        <td scope="row"><label for="co_Id">아이디</label></td>
        <td><input type="text" name="co_Id" id="co_Id"></td>
      </tr>
      <tr>
        <td scope="row"><label for="co_Password">비밀번호</label></td>
        <td><input type="password" name="co_Password" id="co_Password"></td>
      </tr>
      <tr>
        <td scope="row"><label for="co_Content">내용</label></td>
        <td><textarea name="co_Content" id="co_Content"></textarea></td>
      </tr>
    </tbody>
  </table>
  <div class="btnSet">
    <input type="submit" value="댓글 작성">
  </div>
</form>
<script src="./comment.js" charset="utf-8"></script>
