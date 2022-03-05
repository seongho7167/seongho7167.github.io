
/*
##### 입력 #####
arr1: 연관배열 1
arr2: 연관배열 2
okey: 두개의 연관배열이 공유하는 key

##### 출력 #####
result_arr 중복이 제거된 arr2 배열

##### 설명 #####
arr2에서 arr1과 같은 키를 기준으로 데이터 제거 후 남은 arr2 리턴

*/

function dup_remove(arr1,arr2,okey){
    var valuesArray1 = arr1.reduce(function(prev, item) {
        prev[item[okey]] = item[okey];
        return prev;
    }, {});
    var valuesArray2 = arr2.reduce(function(prev, item) {
        prev[item[okey]] = item[okey];
        return prev;
    }, {});
    var result_arr = arr2.filter(function(item) {
        return !valuesArray1[item[okey]];
    });
    return result_arr;
}
