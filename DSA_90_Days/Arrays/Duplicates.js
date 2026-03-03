// Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order. 
// Additionally, return the length of this distinct sorted subarray.


const duplicates =(arr)=>{
const n =arr.length ;
const result =new Set(arr); //Set only contains distinct value .
return result ;

}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(duplicates(arr));