// You are given a 2D matrix mat[][] of size n × m, where:

// Each row is sorted in increasing order.
// The first element of each row is greater than or equal to the last element of the previous row (i.e., mat[i][0] ≥ mat[i−1][m−1] for all 1 ≤ i < n).
// Given an integer x, check whether x is present in the matrix or not.


const search_array=(arr,target)=>{
    let n=arr.length;
    let m=arr[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]===target){
                return true;
            }
        }
    }
    return -1;
}

let arr= [
    [1, 5, 9],
    [14, 20, 21],
    [30, 34, 43]
];
let x = 14;
console.log(search_array(arr,x))