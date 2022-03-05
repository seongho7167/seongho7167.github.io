/*
##### 입력 #####
arr1: 연관배열 1
arr2: 연관배열 2
okey: 두개의 연관배열이 공유하는 key

##### 출력 #####
result_arr 중복이 제거된 새로운 배열

##### 설명 #####
2개의 연관배열에서 한 key를 기준으로 중복되는 데이터를 제거하고 새로운 배열로 리턴한다.

*/
function dup_remove2(arr1,arr2,okey){
	var valuesArray1 = arr1.reduce(function(prev, item) {
		prev[item[okey]] = item[okey];
		return prev;
	}, {});
	var valuesArray2 = arr2.reduce(function(prev, item) {
		prev[item[okey]] = item[okey];
		return prev;
	}, {});
	var result_arr = arr1.filter(function(item) {
		return !valuesArray2[item[okey]];
	}).concat(
		arr2.filter(function(item) {
			return !valuesArray1[item[okey]];
		})
	);
	return result_arr;
}
