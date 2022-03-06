<?php
/*
	sql 생성시 파라미터로 넘겨받은 값에 injection 공격이 들어오는것을 막기 위함 기존 mysqli_real_escape_string 절차형태에서 객체지향형태로 변형된 모습. mysqli 객체와 문자를 파라미터값으로 실행됨
*/
function escapestr($str){
	global $sysdb_conn;
	$res = '';
	$connection = new mysqli($sysdb_conn);
	$res = $connection->real_escape_string($str);
	return $res;
}
?>
