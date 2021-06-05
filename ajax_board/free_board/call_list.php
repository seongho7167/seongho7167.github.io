<?php
  require_once '../config.php';
  $con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
  require_once '../ajax/secuChk.php';

  if(isset($_GET['page'])){
  	$page = secuChk($_GET['page']);
  	$page = (int)$page;
  } else {
    $page = 1;
  }

  if(isset($_GET['search_condition']) && isset($_GET['search_text'])){
  	$search_condition = secuChk($_GET['search_condition']);
  	$search_text = secuChk($_GET['search_text']);
    if($search_condition == '1'){
      $search_condition = 'bofr_title';
    }else if($search_condition == '2'){
      $search_condition = 'bofr_mem_uid';
    }else {
      $search_condition = 'bofr_content';
    }
    $subString .= '&amp;searchColumn='.$search_condition;
    $subString .= '&amp;searchText='.$search_text;
    $searchSql = 'where `'.$search_condition.'` like "%'.$search_text.'%"';
  } else {
  	$search_condition = '';
  	$search_text = '';
    $searchSql = '';
  }

  $sql = 'SELECT * From board_free '.$searchSql;
  //print_r($sql);
  $res = mysqli_query($con,$sql);
  $cnt = mysqli_num_rows($res);
  $all_recode = $cnt;
	$one_page = 10;
	$all_page = ceil($all_recode / $one_page);

	$one_block = 10;
	$all_block = ceil($all_page / $one_block);
	$now_block = ceil($page / $one_block);

	$first_page = ($now_block*$one_block) - ($one_block-1);
  if($now_block == $all_block){
    $last_page = $all_page; // 현재 블럭이 마지막 블럭이라면 $allPage가 마지막 페이지
  } else {
    $last_page = $now_block*$one_block; // 현재 블럭의 마지막 페이지
  }

	$prev_page = (($now_block - 1)*$one_block);
	$next_page = (($now_block + 1)*$one_block)-($one_block-1);

  $recode_limit = ($one_page*$page) - $one_page; // 몇번째 글부터 가져오는지
  $sql_limit = 'limit '.$recode_limit.', '.$one_page; // limit sql 구문
	$sql = 'SELECT * FROM board_free '.$searchSql.'ORDER BY `bofr_uid` desc '.$sql_limit;
  //print_r($sql);
	$res = mysqli_query($con, $sql);

	$result = array();
	while($row = mysqli_fetch_array($res)){
		$datetime = explode(' ', $row['bofr_date']);
		$date = $datetime[0];
		$time = $datetime[1];
		if($date == Date('Y-m-d')){
		  $row['bofr_date'] = $time;
		} else {
		  $row['bofr_date'] = $date;
		}
		array_push($result, $row);
	}
  $search_data = array($subString);
	$page_data = array('first_page' => $first_page,'last_page' => $last_page,'one_page' => $one_page,'one_block' => $one_block,'next_page'=> $next_page,'prev_page'=>$prev_page,'all_page'=>$all_page,'all_block'=>$all_block,'all_recode'=>$all_recode,'now_block'=>$now_block,'page'=>$page,'all_recode_cnt'=>$cnt);
	array_push($result, $page_data);
  array_push($result, $search_data);

echo json_encode($result);
?>
