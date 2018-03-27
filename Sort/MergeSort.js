var arr = [4, 1, 2, 3, 8, 5, 7, 6];

function Merge(arr, p, q, r) {
    var leftArr = arr.slice(p, q);
    var rightArr = arr.slice(q, r);
    // left arr push sentry value
    leftArr.push(undefined);
    // right arr push sentry value
    rightArr.push(undefined);
    // leftArr index
    var i = 0;
    // rightArr index
    var j = 0;
    for (var k = 0; k < r - p; k++) {
        // if leftArr[i] is sentry value, the leftArr is empty(or all leftArr value have been used)
        if (leftArr[i] == undefined) {
            arr[p + k] = rightArr[j++];
        } else if (rightArr[j] == undefined) {
            arr[p + k] = leftArr[i++];
        } else {
            if (leftArr[i] >= rightArr[j]) {
                arr[p + k] = rightArr[j++];
            } else {
                arr[p + k] = leftArr[i++];
            }
        }
    }
}

function MergeSort(arr, p, r) {
    if (p < r) {
        var middle = Math.floor((p + r) / 2);
        MergeSort(arr, p, middle);
        MergeSort(arr, middle + 1, r);
        // arr.slice(x,y)   The result of slice function not include arr[y] , so the Merge function third params and fourth params should + 1;
        Merge(arr, p, middle + 1, r + 1);
    }
}
MergeSort(arr, 0, arr.length - 1);
console.log(arr);