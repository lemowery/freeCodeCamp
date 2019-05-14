function chunkArrayInGroups(arr, size) {
    // Break it up.
    // This function divides an array into chunks of a given size
    // then returns the chunks in a 2D array.
    let result = [];
    let i = 0;
    for (i; i < arr.length / size - 1; i++) {
        result.push(arr.slice(i * size, i * size + size));
    }
    result.push(arr.slice(i * size));
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);