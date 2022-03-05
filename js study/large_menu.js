/*
	##### 변수정의 #####
	class='mouse_over'를 이용하여 사용함

	##### 설명 #####
	button 태그에서 해당 클래스를 사용하고 버튼을 누르면 아무런동작을 하지 않음
	메뉴에서 하위메뉴를 여는 용도로 사용함

	##### 업데이트로그 #####
	2020.07.12 김형석 신규
	2021.05.31 양성호 수정 (1차 메뉴 클릭시 해당 인덱스 페이지로 이동)

*/
//페이지이동없음
$(document).on('click','.large_menu',function(){
	var target_pagename = $(this).data('menu');
	if($(this).attr('id')){
		target_pagename = $(this).attr('id');
	}
	sessionStorage.setItem("page_name",target_pagename);
	if($(this).attr('get_data') != '' && typeof $(this).attr('get_data')!='undefined'){
		target_pagename = target_pagename.toString() + $(this).attr('get_data');
	}
	debug(target_pagename+'으로페이지이동합니다');
	location.href='/'+target_pagename;
});
