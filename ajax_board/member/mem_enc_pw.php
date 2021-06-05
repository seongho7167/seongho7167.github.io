<?php
	$login = $_POST['login'];
	$registration = $_POST['registration'];
	if(!empty($registration)){
		if($registration == '1'){
			$b_mem_pw = base64_encode(hash('sha512',$b_mem_pw)).$b_mem_regdate;
			require_once 'mem_data_insert.php';
		}else {
			echo '<script>alert("잘못된 경로의 접속입니다.");history.back();</script>';
		}
	} else {
		if($login == '1'){
			$b_mem_pw = base64_encode(hash('sha512',$b_mem_pw));
			require_once 'login_data_match.php';
		}else {
			echo '<script>alert("잘못된 경로의 접속입니다. 정상적인 접속 경로를 이용해주세요.");history.back();</script>';
		}
	}
?>
