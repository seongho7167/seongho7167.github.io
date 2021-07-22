// 배열에서 원하는 요소만 제거

var arr = [1,2,3,4,5,6,7,8,9];
var id = 7;
for(var i = 0; i < arr.length; i++){
	if(arr[sw_i]['id'].indexOf(id) != -1){
		arr.splice(i,1);
	}
}

console.log(arr); // [1,2,3,4,5,6,8,9];