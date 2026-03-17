// Given an unsorted array arr[] of size n, containing elements from the range 1 to n, 
// it is known that one number in this range is missing, and another number occurs twice in the array, 
// find both the duplicate number and the missing number.

const missing_duplicate = (arr) => {
    const n = arr.length;
    let duplicate = -1;
    let missing = -1;

    let hash = new Array(n + 1).fill(0);

    // Count frequency
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    // Find duplicate & missing
    for (let i = 1; i <= n; i++) {
        if (hash[i] === 2) duplicate = i;
        if (hash[i] === 0) missing = i;
    }

    return { duplicate, missing };
};

let arr = [3, 1, 3,4,5];
console.log(missing_duplicate(arr));