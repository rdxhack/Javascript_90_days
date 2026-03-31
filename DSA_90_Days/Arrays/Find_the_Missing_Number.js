// Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. 
// This array represents a permutation of the integers from 1 to n with one element missing.
//  Find the missing element in the array.



const missing_number = (arr) => {

    const n = arr.length+1;
    let sum_data =(n*(n+1))/2;
    let sum =0;
    for(let i=0;i<n-1;i++){
        sum+=arr[i];
    }
    return (sum_data-sum);
}
const arr = [8, 2, 4, 5, 3, 7, 1];
console .log (missing_number(arr));


const missing = (arr)=>{
    const n = arr.length+1;
    let hash = new Array(n + 1).fill(0);
    for(let i =0 ; i<n-1;i++){
        hash[arr[i]]++;
    }
    for(let i =1 ; i<=n;i++){
        if(hash[i]===0)
            return i ;
    }

    return -1;

}

console .log (missing(arr));