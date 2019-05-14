function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    // This function takes a number num and finds the lowest index it should
    // be placed into in the array arr after it has been sorted
    if (arr.length == 0) {
        return 0;
    }
    arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]){
            return i;
        }
    }
    return arr.length;
}

getIndexToIns([5, 3, 20, 3], 5);