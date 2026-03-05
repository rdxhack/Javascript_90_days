// You are given an array of n-elements, you have to find the number of operations needed to make all elements of array equal. Where a single operation can increment an element by k. 
// If it is not possible to make all elements equal print -1.


function minimun_operation(arr ,k ){
 const n = arr.length ;
  let max =Math.max(...arr);
  let operation = 0; 
  for (let i = 0 ; i< n ; i++){
    let diff = max - arr[i];
    if(diff%k!==0){
        return -1;
    }
    operation += diff / k;

  }
  return operation

}
const k = 3 ;
const arr = [4, 7, 19, 16];
console.log(minimun_operation(arr,k))


// logic we need to get the max element of the array 
// we need to get the different b/w the max and current array element and check the difference is divisible by K if not retur -1 
// return opertion diif/k because we need to increase the array data by k.