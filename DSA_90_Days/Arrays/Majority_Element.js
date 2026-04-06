
// Given an array arr[] of size n, find the element that appears more than ⌊n/2⌋ times. If no such element exists, return -1.
const majority_elements =(arr )=>{
    let n= arr.length;
    for (let i=0;i<n;i++){
        let count =0;
        for(let j=0;j<n;j++){
            if(arr[i]===arr[j]){
                count++;
            }   
        }
        if(count>n/2){
            return arr[i];
        }
    }
    return -1;
}

let arr = [7]
console.log(majority_elements(arr));