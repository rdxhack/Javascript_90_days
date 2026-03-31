// Given an array of positive integers arr[] of size n, 
// the task is to find second largest distinct element in the array.

const second_largest_number =(arr)=>{
    let n =arr.length;
    let largest = -1;
    let second_large =-1 ;
    for(let i=0;i<n;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    for(let i=0;i<n;i++){
        if(arr[i]>second_large && largest!==arr[i]){
            second_large =arr[i]
        }
    }
    return second_large ;

}

let arr = [12, 35, 1, 10, 34, 1];
console.log(second_largest_number(arr));