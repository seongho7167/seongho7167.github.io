/*
	Agent를 이용하여 사용자 접속환경이 모바일인지 pc인지 체크
	pc 환경이라면 1(int), mobile 환경이라면 2(int)
*/

<?php

function check_mobile(){
	$res = false;
	$mobile_agent = "/(iPod|iPhone|Android|BlackBerry|SymbianOS|SCH-M\d+|Opera Mini|Windows CE|Nokia|SonyEricsson|webOS|PalmOS)/";
	if(preg_match($mobile_agent, $_SERVER['HTTP_USER_AGENT'])){
		$res = 2; // "Mobile";
	}else{
		$res = 1; // "PC";
	}
	
	return $res;
}

?>