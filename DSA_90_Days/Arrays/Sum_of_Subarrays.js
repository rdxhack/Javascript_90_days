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