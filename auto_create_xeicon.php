사용자 data 값과 json 파일을 이용한 xeicon 아이콘 자동생성

// html 문서 
<li class='large_menu' data-menu='stnd_info_list'>
	기초데이터
	<dl class='move_none'>
		품목 관리
		<dd id='stnd_item_list' >품목 관리</dd>
		<dd id='stnd_item_classify_list' >품목 그룹 관리</dd>
	</dl>
</li>



// json 파일
[{"stnd_info_list":["sitemap"]}]


// script 내용
$.getJSON('./menu_icon.json', function(json){
	for(var i = 0; i < json.length; i++){
		$.each(json[i], function(key, value){
			if($('.selector_menu').data('menu') == key){
				var icon_cnt = json[i][key].length;
				for(var k = 0; k < icon_cnt ; k++){
					$('.sub_menu > dl').eq(k).after('<div class="icon_box"><i class="xi-'+json[i][key][k]+'"></i></div>');
				}
			}
		});
	}
});