<?php
  //require_once 'conn.php';
  require_once 'preset.php';

  /*페이징 시작*/
  if(isset($_GET['page'])){
    $page = $_GET['page'];
  }else {
    $page = 1;
  }

  /* 검색 시작 */
  if(isset($_GET['searchColumn'])){
    $searchColumn = $_GET['searchColumn'];
    $subString .= '&amp;searchColumn='.$searchColumn;
  }
  if(isset($_GET['searchText'])){
    $searchText = $_GET['searchText'];
    $subString .= '&amp;searchText='.$searchText;
  }

  if(isset($searchColumn) && isset($searchText)){
    $searchSql = 'where '.$searchColumn.' like "%'.$searchText.'%"';
  }else {
    $searchSql = '';
  }

  /* 검색 끝 */

  $sql = 'select count(*) as cnt from board_free '.$searchSql;

  $result = $mysqli->query($sql);
  $row = $result->fetch_assoc();
  $allPost = $row['cnt']; // 모든 게시글 수
  if(empty($allPost)){
    $emptyData = '<tr><td class="textCenter" colspan="5">게시글이 존재하지 않습니다.</td></tr>';
  }else {
    $onePage = 5; // 한 페이지에 보여줄 게시글 수
    $allPage = ceil($allPost/$onePage); // 전체 페이지의 수

    if($page < 1 || ($allPage && $page) > $allPage){
      ?>
      <script>
        alert('존재하지 않는 페이지 입니다.');
        history.back();
      </script>
      <?php
      exit;
    }

    $oneBlock = 10; // 한번에 보여줄 페이지의 수(1~10, 11~20...)
    $currentBlock = ceil($page/$oneBlock); // 현재 블럭
    $allBlock = ceil($allPage/$oneBlock); // 전체 블럭의 수

    $firstPage = ($currentBlock*$oneBlock) - ($oneBlock-1); // 현재 블럭의 첫 페이지
    if($currentBlock == $allBlock){
      $lastPage = $allPage; // 현재 블럭이 마지막 블럭이라면 $allPage가 마지막 페이지
    } else {
      $lastPage = $currentBlock*$oneBlock; // 현재 블럭의 마지막 페이지
    }

    $prevPage = (($currentBlock - 1)*$oneBlock); // 이전 페이지로 이동, 11~20 블럭일때 이전 버튼을 누르면 10페이지로 이동
    $nextPage = (($currentBlock + 1)*$oneBlock)-($oneBlock-1); // 다음 페이지로 이동, 11~20 블럭일때 다음 버튼을 누르면 21페이지로 이동
    $paging = '<ul>'; // 페이징을 저장할 공간
    // 첫 페이지가 아니라면 처음 버튼 생성
    if($page != 1){
      $paging .= '<li class="page page_start"><a href="./list.php?page=1'.$subString.'">첫 페이지로</a></li>';
    }
    // 첫 블럭이 아니라면 이전 버튼 생성
    if($currentBlock != 1){
      $paging .= '<li class="page page_prev"><a href="./list.php?page='.$prevPage.$subString.'">이전</a></li>';
    }

    for($i=$firstPage;$i<=$lastPage;$i++){
      if($i==$page){
        $paging .= '<li class="page current">'.$i.'</li>';
      }else {
        $paging .= '<li class="page"><a href="./list.php?page='.$i.$subString.'">'.$i.'</a></li>';
      }
    }
    //마지막 블럭이 아니라면 다음 버튼 생성
    if($currentBlock != $allBlock){
      $paging .= '<li class="page page_next"><a href="./list.php?page='.$nextPage.$subString.'">다음</a></li>';
    }
    // 마지막 블럭이 아니라면 끝 버튼 생성
    if($page != $allPage){
      $paging .= '<li class="page page_end"><a href="./list.php?page='.$allPage.$subString.'">끝</a></li>';
    }
    $paging .= '</ul>';
    /* 페이징 끝 */

    $currentLimit = ($onePage*$page) - $onePage; // 몇번째 글부터 가져오는지
    $sqlLimit = 'limit '.$currentLimit.', '.$onePage; // limit sql 구문

    $sql = 'select * from board_free '.$searchSql.'order by b_num desc '.$sqlLimit; // 원하는 수만큼 가져온다 (0번째부터 10번째까지)
    $result = $mysqli->query($sql);
  }

  $current_num = $allPost - (($page-1)*$onePage) + 1; // 게시글 넘버링
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>자유게시판 만들기</title>
  <style>
    ul {list-style: none}
    a { text-decoration: none;}
    table {display:table}
    tr { display:table-row;}
    td, th {display: table-cell;text-align: center}
    .paging ul .page {display: inline-block;padding-left:15px}
    .paging ul .page.current {color:blue;font-weight:bold}
  </style>
</head>
<body>
  <article class="board">
    <h3>자유게시판</h3>
    <table>
      <caption class="readHide">자유게시판</caption>
      <thead>
        <tr>
          <th scope="col" class="no">번호</th>
          <th scope="col" class="title">제목</th>
          <th scope="col" class="author">작성자</th>
          <th scope="col" class="date">작성일</th>
          <th scope="col" class="hit">조회수</th>
        </tr>
      </thead>
      <tbody>
        <?php
          if(isset($emptyData)){
            echo $emptyData;
          }else {
            while($row = $result->fetch_assoc())
            {
              $datetime = explode(' ', $row['b_date']);
              $date = $datetime[0];
              $time = $datetime[1];
              if($date == Date('Y-m-d')){
                $row['b_date'] = $time;
              } else {
                $row['b_date'] = $date;
              }
              $current_num--;
        ?>
          <tr>
            <td class="no"><?php echo $current_num ?></td>
            <td class="title"><a href="<?php echo $url['root']; ?>boardEx/view.php?bnum=<?php echo $row['b_num']?>"><?php echo $row['b_title'] ?></a></td>
            <td class="user"><?php echo $row['b_id'] ?></td>
            <td class="date"><?php echo $row['b_date'] ?></td>
            <td class="hit"><?php echo $row['b_hit'] ?></td>
          </tr>
        <?php
            }
          }
        ?>
      </tbody>
    </table>
    <div class="btnSet">
      <a href="<?php echo $url['root']; ?>boardEx/write.php">글쓰기</a>
    </div>
    <div class="paging">
      <?php echo $paging; ?>
    </div>
    <div class="searchBox">
      <form action="./list.php" method="get">
        <select name="searchColumn">
          <option <?php echo $searchColumn=='b_title'?'selected="selected"':null?> value="b_title">제목</option>
          <option <?php echo $searchColumn=='b_content'?'selected="selected"':null?> value="b_content">내용</option>
          <option <?php echo $searchColumn=='b_id'?'selected="selected"':null?> value="b_id">아이디</option>
        </select>
        <input type="text" name="searchText" value="<?php echo isset($searchText)?$searchText:null?>">
        <button type="submit">검색</button>
      </form>
    </div>
  </article>
</body>
</html>
