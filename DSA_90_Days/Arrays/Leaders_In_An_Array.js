// Given an array arr[] of size n, the task is to find all the Leaders in the array.
// An element is a Leader if it is greater than or equal to all the elements to its right side.

const leader = (arr) => {
  const arr2 = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        break;
      }
    }
    if (j === n) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};
const arr = [16, 17, 4, 3, 5, 2];
const result = leader(arr);
console.log(result);
console.log(result.join(" "));
