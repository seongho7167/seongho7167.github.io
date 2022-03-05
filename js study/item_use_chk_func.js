/*
	##### 입력 #####
	obj : e.target (클릭 변경한 select node)
	table : 변경 테이블 (string)
	pk : 변경 테이블 uid column (string)

	##### 출력 #####
	table의 use_chk 컬럼을 업데이트하고 결과에 따라 메시지와 target node 의 css 를 변경함

	##### 설명 #####
	use_chk column 업데이트 함수
*/
function item_use_chk_func(obj,table,pk,uid){
	var use_chk_val = $(obj).val();
	var data = new Array();
	var data_info = {
		table	 : table,
		column	 : {use_chk : use_chk_val},
		pk		 : pk,
		pk_value : [uid],
	}
	data.push(data_info);
    var update_output = update_common(data);
    if(update_output.result == 'success'){
        d_message('사용여부가 수정되었습니다.','layout');
        $(obj).val() == 0 ? $(obj).css('color','#000'):$(obj).css('color','red');
    }else {
        d_message('사용여부가 수정에 실패하였습니다.','layout','dhx_message--error');
    }
}
