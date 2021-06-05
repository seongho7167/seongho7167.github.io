<?php
if(!defined('__seongho7167__')){echo "<meta charset='utf-8'>"; exit('정상적인 접속경로를 이용해주세요!!!');}

  if($_SESSION['comp_login'] != 'login'){
    echo "<script>alert('로그인 후 이용해주세요.'); location.href='http://seongho7167.dothome.co.kr/php'</script>";
  	return false;
  }
?>
<style>
  #free_board {width:50%;margin:0 auto;padding:0;display:table}
  tr {display:table-row}
  td, th {display:table-cell}
  tr:nth-of-type(2n) {background-color:#eee}
  a {color:#222;text-decoration:none}
  a:hover {color:#999;text-decoration:underline}
  ul {list-style: none;width:50%;margin:0 auto;padding:0}

  #paging {margin-top:30px}
  .page {font-size:19px;display:inline-block;padding:0 7px}
  .disabled {opacity:.3}
  .page:hover {cursor:pointer}
  #paging .active {color:blue;font-weight:bold;opacity:1}
  #search_box {width:50%;margin:0 auto;;margin-top:20px;min-width:300px}
  #search_box > input {text-align:left;text-indent:3px;padding:3px 0;width:30%}
	#search_select {display:inline-block;padding:3px 0}
</style>

<table id='free_board'></table>
<ul id='paging'></ul>
<div id='search_box'>
	<select id='search_select'>
		<option value='1' selected>제목</option>
		<option value='2'>글쓴이</option>
		<option value='3'>내용</option>
	</select>
  <input type="text" name="search_val" id='search_val' placeholder="검색어 입력후 포커스 아웃! 자동검색!">
</div>
<script src='./free_board/list.js'></script>
<script src='./func/move_page.js'></script>
