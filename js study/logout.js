/*
	##### 변수정의 ##### 
	입력 : 세선아이디값
	출력 : 페이지이동
	
	##### 설명 ##### 
	로그아웃을 위한 함수임.

	##### 업데이트로그 ##### 
	2020.07.12 김형석 신규

*/
//로그아웃
function logout(login_uid){
	$.ajax({
			url:'./?json=logout',
			type:'post',
			datatype: 'json',
			data:{login_uid:login_uid},
			success: function(data){
				if(data.result == 'fail'){
					alert('시스템 오류가 발생하였습니다. 관리자에게 문의해주시길 바랍니다.');
					location.reload();
					return false;
				}
				if(data.result == 'success'){
					alert('정상적으로 로그아웃 되었습니다.');
					location.href='/';
				}
			}
		});
}
