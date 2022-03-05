/*
	##### 변수 정의 ##### 
	Array입력

	##### 설명 ##### 
	배열내 중복된 값을 제거하여 다시 배열로 만들어줌

	##### 업데이트로그 ##### 
	2020.07.28 김형석 신규
*/
function removeDuplicatesArray(arr){
	var tempArr = [];
	for(var i = 0; i < arr.length; i++){
		if(tempArr.length == 0){
			tempArr.push(arr[i]);
		}else{
			var duplicatesFlag = true;
			for(var j = 0; j < tempArr.length; j++){
				if(tempArr[j] == arr[i]){
					duplicatesFlag = false;
					break;
				}
			}
			if(duplicatesFlag){
				tempArr.push(arr[i]);
			}
		}
	}
	return tempArr;
}