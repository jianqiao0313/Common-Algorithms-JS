var arr = [5,3,1,2,4];
function insertSort(arr){
  for(var i = 1 ; i < arr.length ; i ++){
    var key = arr[i];
    var j = i - 1 ;
    while(j >= 0 && arr[j] > key ){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
}
insertSort(arr);
console.log(arr);