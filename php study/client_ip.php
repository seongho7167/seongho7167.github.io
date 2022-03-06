
<?php
/*
	클라이언트 접속 ip 주소를 확인하고 리턴함
*/
function client_ip() {
	$res = '';
	if (getenv('HTTP_CLIENT_IP'))
		$res = getenv('HTTP_CLIENT_IP');
	else if(getenv('HTTP_X_FORWARDED_FOR'))
		$res = getenv('HTTP_X_FORWARDED_FOR');
	else if(getenv('HTTP_X_FORWARDED'))
		$res = getenv('HTTP_X_FORWARDED');
	else if(getenv('HTTP_FORWARDED_FOR'))
		$res = getenv('HTTP_FORWARDED_FOR');
	else if(getenv('HTTP_FORWARDED'))
		$res = getenv('HTTP_FORWARDED');
	else if(getenv('REMOTE_ADDR'))
		$res = getenv('REMOTE_ADDR');
	else
		$res = 'UNKNOWN';
	return $res;
}
?>
