/*
	##### 변수정의 #####
	date 밀리세컨드 값

	##### 설명 #####
	밀리세컨드를 연-월-일 시:분 으로 변경

	##### 업데이트로그 #####
	2021.09.26 양성호 신규

*/
function regdate_change(date,type='time'){
    var year = date.substr(0,4);
    var month = date.substr(4,2);
    var n_date = date.substr(6,2);
    var time = date.substr(8,2);
    var min = date.substr(10,2);

    if(type == 'time'){
        return `${year}-${month}-${n_date} ${time}:${min}`;
    }else if(type == 'date'){
        return `${year}-${month}-${n_date}`;
    }
}
