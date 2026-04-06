// Given an integer array arr[], compute the sum of all possible sub-arrays of the array. 
// A sub-array is a contiguous part of the array.


const sun_subarray =(arr)=>{
    let result = 0;
    const n = arr.length
    for(let i=0;i<arr.length;i++){
        let temp =0;
        // result += arr[i]*(n-i)*(i+1);
        for(let j=i;j<n;j++){
            temp+=arr[j];
            result += temp;
        }
    }
    return result ;
}


const arr =[1, 4, 5, 3, 2] ;
console.log(sun_subarray(arr));

//Maximum Subarray Sum - Kadane's Algorithm =>
// The idea of Kadane's algorithm is to traverse over the array from left to right and for each element, 
// find the maximum sum among all subarrays ending at that element.
//  The result will be the maximum of all these values. 

const maximum_sum=(arr)=>{
    let n=arr.length;
    let max=arr[0];
    for(let i =0;i<n;i++){
        max=Math.max(max+arr[i],arr[i]);
    }
    return max;
}
let arr1 =[2, 3, -8, 7, -1, 2, 3];
console.log(maximum_sum(arr1),"Maximum Subarray Sum - Kadane's Algorithm")