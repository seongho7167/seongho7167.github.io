/*
	##### 설명 #####
	ajax 호출시 사용하는 함수.

	##### 사용예시 #####
	call_ajax('login_info', {}, function(json){
		debug(json);
	});

	##### 업데이트로그 #####
	2020.07.15 김태일 신규

*/

var call_ajax = function(ajax_name, send_data, callback_success, async = true){
	$.ajax({
		url : './j/'+ajax_name,
		data : send_data,
		type : 'POST',
		async : async,
		dataType: 'json',
		success : callback_success,
		fail: function(jqXHR, textStatus, errorThrown){
			debug("jqXHR: "+ jqXHR);
			debug("status: "+ textStatus);
			debug("error: "+ errorThrown);
			alert('요청 오류! ['+textStatus+']');
		}
	});
}