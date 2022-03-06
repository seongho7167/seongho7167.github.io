<?php
function escapestr($str){
	global $sysdb_conn;
	$connection = new mysqli($sysdb_conn,$str);
	if($sqli_filter){
		$str = $connection->escape_string($str);
	}  
}
?>