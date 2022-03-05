/*
##### 입력 #####
obj: dhmlx grid object

##### 출력 #####
obj: perm_state 에 따라 들어온 obj 를 변경하여 리턴한다.

##### 설명 #####
perm 체크 후 들어온 객체를 권한에 맞게 수정한다.

*/
function perm_dhx_chk(obj) {
    if (!obj) { // 매개변수 존재 확인
        alert('권한 체크에 문제가 발생하였습니다.');
        console.log('error: Object in perm_dhx_chk is ' + obj);
        return false;
    } else {
        if (!perm_state) { // 권한값 존재 확인
            alert('권한 체크에 문제가 발생하였습니다.');
            console.log('error: perm_state is ' + perm_state);
            return false;
        } else {
            if (perm_state != 'w') { // 권한값 확인
                var temp_obj = obj;
                if (!temp_obj.columns) { // 매개변수로 들어온 객체가 폼 객체인 경우
                    var obj_length = temp_obj.rows.length;
                    for (var i = 0; i < obj_length; i++) {
                        if (!temp_obj.rows[i].cols) {
                            // cols 가 존재하지 않는 rows는 건너뜀
                            continue;
                        } else { // 폼 객체 안에 컬럼 객체가 존재하는 경우
                            var col_length = temp_obj.rows[i].cols.length;
                            for (var k = 0; k < col_length; k++) { // 컬럼 객체의 배열 안에 저장 또는 수정 버튼 확인
                                if (temp_obj.rows[i].cols[k].type == 'button') {
                                    // 수정 또는 저장 버튼이 존재하는 경우 버튼을 감춤
                                    temp_obj.rows[i].cols[k].hidden = true;
                                } else {
                                    // 버튼이 없다면 건너뜀
                                    continue;
                                }
                            }
                        }
                    }
                    return temp_obj;
                } else { // 매개변수로 들어온 객체가 그리드 객체인 경우
                    if (temp_obj.columns[0].id == 'chk_all') {
                        // 체크박스 hidden 으로 처리시 버그 발생, 배열 0번째가 체크박스인 경우 0번째 요소를 삭제함
                        temp_obj.columns.splice(0, 1);
                    }
                    var obj_length = temp_obj.columns.length;
                    for (var i = 0; i < obj_length; i++) {
                        if (temp_obj.columns[i].id == 'use_chk' || temp_obj.columns[i].id == 'option' || temp_obj.columns[i].id == 'prpl_doing' || temp_obj.columns[i].id == 'prwo_status' || temp_obj.columns[i].id == 'button_bad' || temp_obj.columns[i].id == 'button_out') {
                            // 그리드 객체 안에 사용여부, 버튼 컬럼을 감춤
                            temp_obj.columns[i].hidden = true;
                        }
                        // 그리드 컬럼 수정을 모두 불가능으로 변경
                        temp_obj.columns[i].editable = false;
                    }
                    return temp_obj;
                }
            } else {
                // 권한이 w 인 경우 리턴
                return obj;
            }
        }
    }
}
