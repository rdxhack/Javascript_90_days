
// At each iteration, shift the elements by one position to the right in a circular fashion (the last element becomes the first). 
// Perform this operation d times to rotate the elements to the right by d positions.


function rotateRight(arr, d) {
    const n = arr.length;
    d = d % n;
    console.log(arr.slice(d));
    console.log(arr.slice(0,d))
    return arr.slice(d).concat(arr.slice(0, d));
}

console.log("result",rotateRight([1,2,3,4,5,6], 2)); //LEFT ROTATION


