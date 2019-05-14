function mutation(arr) {
    // This function determines if the string in the first index of the array
    // contains all of the letters of the string in the second index
    //
    for (let letter of arr[1]) {
        if(arr[0].toLowerCase().indexOf(letter.toLowerCase()) === -1){
            return false;
        }
    }
    return true;
    }

mutation(["Mary", "army"]);