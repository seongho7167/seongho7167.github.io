/*
	##### 변수정의 #####
	printing('.group-print');

	##### 설명 및 사용방법 #####
	<button onclick="printing('.group-print');" class='btn move_none'><i class='xi-print'></i> 인쇄</button>
	<button onclick="printing();" class='btn move_none'><i class='xi-print'></i> 인쇄</button>

	인쇄할 대상의 영역을 함수안에 선언할 수 있음.
	선언하지 않는다면 전체페이지를 인쇄함

	##### 업데이트로그 #####
	2020.07.31 김형석 신규
	2022.01.21 양성호 수정 ( html 문서 복제는 이벤트가 따라오지 못하는 문제가 발생, 해결은 복제가 아닌 기존 html 위에 인쇄 window를 생성하고 기존 html은 css로 처리함 )

*/
function printing(target=null){
	var initBody = document.querySelector('html');
	var printDiv = document.createElement("DIV");
	printDiv.className = "print-div";
	var print_contents = null;
	window.onbeforeprint = function(){
		if(target){
			print_contents = $(target).html();
			printDiv.innerHTML = print_contents;
			initBody.appendChild(printDiv);
			document.body.style.display = 'none';
		}else{
			var print_contents = initBody.innerHTML;
			printDiv.innerHTML = print_contents;
			initBody.appendChild(printDiv);
			document.body.style.display = 'none';
		}
	}
	window.onafterprint = function(){
		document.body.style.display = 'block';
		printDiv.style.display = 'none';
	}
	window.print();
}
// function printing(target=null){
// 	var initBody = $('body').html();
// 	window.onbeforeprint = function(){
// 		if(target){
// 			$('body').html($(target).html());
// 		}else{
// 			$('body').html($('body').html());
// 		}
// 	}
// 	window.onafterprint = function(){
// 		$('body').html(initBody);
// 	}
// 	window.print();
// }
