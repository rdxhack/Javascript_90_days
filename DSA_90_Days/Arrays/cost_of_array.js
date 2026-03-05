// Given an array of n integers. We need to reduce size of array to one. We are allowed to select a pair of integers and remove the larger one of these two. This decreases the array size by 1. Cost of this operation is equal to value of smallest one.
//  Find out minimum sum of costs of operations needed to convert the array into a single element.



function cost (arr){
const n = arr.length;
 return (n-1)*Math.min(...arr);
}
const arr = [4, 3, 2];
console.log(cost(arr))