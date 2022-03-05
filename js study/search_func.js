/*
    ##### 변수 #####
    base_item_data: 그리드 파싱 데이터 배열
    item_list_grid: 검색할 그리드 인스턴스 객체
    row: total_row 아이디 string

    ##### 설명 #####
    grid에서 검색창의 검색어를 검색하고 결과값으로 그리드를 파싱함.
*/

function search_func(base_item_data,item_list_grid,row = null){
    if($("#ck_all").length > 0 ){
        document.getElementById("ck_all").checked = false; // 전체체크박스 값을 false 처리 함
    }
    var search_data_arr = base_item_data.map(function(item){
      item.checked = false; // 그리드에 파싱할 데이터의 checked 속성 값을 false 처리
      var temp_key_arr = Object.keys(item);
      var temp_obj = {};
      for(var k = 0; k < temp_key_arr.length; k++){
        if(temp_key_arr[k] != 'item_idx'){
          var temp_obj_key = temp_key_arr[k];
          temp_obj[temp_obj_key] = item[temp_obj_key];
        }
      }
        return temp_obj;
    });
    if($('#search_text').val() != ''){
        var search_text =  $('#search_text').val().toLowerCase();
        var select_search_id = $('#search_id').val();
        var regexp = new RegExp(search_text);
        var search_res_arr = search_data_arr.filter(function(item){
            return search_filter_func(search_text,item,select_search_id,regexp);
        });

        for(var sere_i = 0; sere_i < search_res_arr.length; sere_i++){
            search_res_arr[sere_i].item_idx = Number(sere_i)+1;
        }
        if(search_res_arr.length > 0){
            stnd_item_data = search_res_arr;
            item_list_grid.data.parse(stnd_item_data);
            var total_row = stnd_item_data.length;
            if(row != null){
                $('#'+row).html(total_row+'개');
            }else {
                $('#total_row').html(total_row+'개');
            }
        }else {
            d_alert('조건에 맞는 품목 데이터가 존재하지 않습니다.');
            $('#search_text').val('');
            $('#search_text').focus();
            return false;
        }
    }else {
        stnd_item_data = base_item_data;
        item_list_grid.data.parse(stnd_item_data);
        var total_row = stnd_item_data.length;
        if(row != null){
            $('#'+row).html(total_row+'개');
        }else {
            $('#total_row').html(total_row+'개');
        }
    }
}
function search_filter_func(search_text,item,select_search_id,regexp){
  for(var keys in item){
    // 그리드 컬럼에서 id, $height 을 제외
    if(keys != 'id' && keys != '$height'){
      // 그리드 컬럼에서 uid 로 끝나는 컬럼 제외
      var RegExp = /(.*)_uid$/g;
      if(keys.match(RegExp) == null){
        // 컬럼값에서 null, 공백 데이터가 있다면 제외
        if(item[keys] != null && item[keys] != ''){
          if(select_search_id == 'all'){
            // 검색시 영문은 소문자로 바꿔서 체크함
            var temp_res = regexp.test(item[keys].toString().toLowerCase());
            if(temp_res) return item;
          }else {
            if(keys == select_search_id){
              var temp_res = regexp.test(item[keys].toString().toLowerCase());
              if(temp_res) return item;
            }
          }
        }
      }
    }
  }
}
