/*
	##### 변수정의 #####
	var barcode_scan_info ={
		//바코드 사용여부(Y/N)
		barcode_use : 'Y',
		//바코드 input 아이디 값
		barcode_input : 'barcode_input',
		//바코드 span 클래스 값
		barcode_span : 'barcode_span',
		//바코드 스캔 후 기능 <- 스캔한 데이터를 해당 함수 변수로 전송
		barcode_func : load_barcode_scan
	};

	##### 설명 #####
	바코드 스캔 
*/
//바코드 스캔
var barcode_scanning_value = '';
function barcode_scan(){
	if(barcode_scan_info){
		if(barcode_scan_info.barcode_use == 'Y'){//바코드 사용 여부 확인
			$(window).keypress(function(e){//키입력
				if(e.which != '13'){//엔터키가 아닌 경우
					barcode_scanning_value += e.key;
				}else{//스캔 후 엔터키
					//입력창 입력
					if($('span[id="'+barcode_scan_info.barcode_input+'"] input').length > 0){
						$('span[id="'+barcode_scan_info.barcode_input+'"] input').val('');
						$('span[id="'+barcode_scan_info.barcode_input+'"] input').val(barcode_scanning_value);
					}
					//span 입력
					if($('span[id="'+barcode_scan_info.barcode_span+'"]').length > 0){
						$('span[id="'+barcode_scan_info.barcode_span+'"]').html('');
						$('span[id="'+barcode_scan_info.barcode_span+'"]').html(barcode_scanning_value);
					}
					debug(barcode_scanning_value);
					barcode_scan_info.barcode_func(barcode_scanning_value);
					//초기화
					barcode_scanning_value = '';
				}
			});

		}
	}
}
