/*
    ##### 변수 #####
    grid: 체크박스를 담은 그리드 인스턴스 객체
    data: 페이지 로드시 그리드에 파싱한 데이터 배열

    ##### 설명 #####
    grid의 체크박스를 모두 false 처리 함

*/

function clear_checkbox(grid,data){
    if(!data){ // 그리드에 데이터가 없는 경우
        data = [];
    }
    data.map(function(item){
        if(item.checked){
            item.checked = false; // 그리드에 파싱할 데이터의 checked 속성 값을 false 처리
        }
    });
    grid.data.parse(data);
    document.getElementById("ck_all").checked = false; // 전체체크박스 값을 false 처리 함
    if($('input:checkbox[name="ck"]').length > 0){
        // 필터에서 결과값이 같은 행은 재구성되지 않는 문제점 해결을 위해 view에 보이는 행들만 다시한번 체크박스 false 처리 함
        $('input:checkbox[name="ck"]').each(function() {
            this.checked = false; // 보여지는 view 그리드의 체크박스를 false로 변경
        });
    }
}
