<?php
	require_once '../config.php';
	$con = new mysqli($DB['host'], $DB['user'], $DB['pw'], $DB['db']);
	session_start();
	echo "<meta charset='utf-8'>";
	$guest = $_GET['guest'];
	$login = $_POST['login'];

	$_SESSION['comp_login'] = 'login';
	$comp_login = $_SESSION['comp_login'];
	if($comp_login == 'login'){
		if($login == '1'){
			$_SESSION['mem_idx'] = $b_mem_idx;
			$_SESSION['mem_id'] = $b_mem_id;
			$_SESSION['mem_nm'] = $b_mem_nm;
			$_SESSION['mem_mail'] = $b_mem_mail;
			$mem_idx = $_SESSION['mem_idx'];
			$mem_id = $_SESSION['mem_id'];
			$mem_nm = $_SESSION['mem_nm'];
			$mem_mail = $_SESSION['mem_mail'];
		} else if($guest = '10') {
			$_SESSION['mem_idx'] = $b_mem_idx;
			$_SESSION['mem_id'] = $b_mem_id;
			$_SESSION['mem_nm'] = $b_mem_nm;
			$mem_idx = $_SESSION['mem_idx'];
			$mem_id = $_SESSION['mem_id'];
			$mem_nm = $_SESSION['mem_nm'];
		}
	  $message = $mem_nm . ' 님, 로그인 했습니다.';
	}
	echo $message;
echo "<meta http-equiv='refresh' content='2; url=http://seongho7167.dothome.co.kr/php'>";

?>
