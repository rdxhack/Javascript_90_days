
// Given an array arr[], Find the prefix sum of the array. A prefix sum array is another array sum[] of the sa
// me size, such that prefix[i] is arr[0] + arr[1] + arr[2] . . . arr[i]


const prefixsum = (arr) =>{
    let n =arr.length;

    let sum = new Array(n);
    sum[0]=arr[0];
    for (let i = 1; i < n; i++)
        sum[i] = sum[i - 1] + arr[i];
    
    return sum;
}
let arr = [10, 20, 10, 5, 15];
console.log(prefixsum(arr).join(" "))