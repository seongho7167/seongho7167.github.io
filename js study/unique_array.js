/*
##### 입력 #####
arr1: 연관배열 1 , arr1 이 배열이 아닌 경우 arr1 값을 키값으로 하고 연관배열 2를 필터링 한다.
arr2: 연관배열 2
okey: 두개의 연관배열이 공유하는 key

##### 출력 #####
result_arr 두 연관배열중 중복을 제외한 고유한 배열로 리턴

##### 설명 #####
2개의 연관배열에서 한 key를 기준으로 고유한 배열로 리턴한다.

##### 업데이트로그 #####
2021.10.13 양성호 신규

*/

function unique_array(arr1=null,arr2=null,key){
  if(arr2 != null){
    if(Array.isArray(arr1)){
        var ids = arr1.map(item => item[key]);
    }else {
        var ids = arr1;
    }
    var result_arr = arr2.filter(function(item){
        return ids == item[key];
    });
    return result_arr;
  }else {
    var result_arr = arr1.filter(function(item) {
      if (!this.hasOwnProperty(item[key])) {
        return this[item[key]] = true;
      }
      return false;
    }, {});
    return result_arr;
  }
}
