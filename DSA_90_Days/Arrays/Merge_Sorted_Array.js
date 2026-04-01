// Given two sorted arrays arr1[] of size n and arr2[] of size m. Merge these two arrays.
// After the merge, the first n smallest elements of the combined sorted array should be stored in arr1[],
//  and the remaining m largest elements should be stored in arr2[]. After the merging process, both arr1[] and arr2[] 
// must remain sorted in non-decreasing order.


const merge_array=(arr1,arr2)=>{
    let n =arr1.length;
    let m= arr2.length;
    let i=0;let j=0;
    let merge=[];
    while(i<n&&j<m){
        if(arr1[i]<arr2[j]){
            merge.push(arr1[i++]);
        }
        else{
            merge.push(arr2[j++]);
        }
    }
    while(i<n){
        merge.push(arr1[i++])
    }
    while(j<m){
        merge.push(arr2[j++]);
    }
    for(let i=0 ;i<n;i++){
        arr1[i]=merge[i];
    }
    for(let i=0 ;i<n;i++){
        arr2[i]=merge[n+i];
    }

}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];


merge_array(arr1, arr2);

console.log(arr1.join(' '));
console.log(arr2.join(' '));