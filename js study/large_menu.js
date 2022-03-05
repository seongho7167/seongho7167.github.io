/*
	##### 변수정의 #####
	class='larget_menu'를 이용하여 사용함

	##### 설명 #####
	id값을 페이지 이름으로 페이지 이동함
	sessionStorage.page_name에 이동할 페이지의 이

*/

$(document).on('click','.large_menu',function(){
	var target_pagename = $(this).data('menu');
	if($(this).attr('id')){
		target_pagename = $(this).attr('id');
	}
	sessionStorage.setItem("page_name",target_pagename);
	if($(this).attr('get_data') != '' && typeof $(this).attr('get_data')!='undefined'){
		target_pagename = target_pagename.toString() + $(this).attr('get_data');
	}
	location.href='/'+target_pagename;
});
