// Given an array arr[] of positive integers where every element appears even times except for one.
//  Find that number occurring an odd number of times.


const single_number =()=>{
    let n = arr.length;
    let hash=new Array(n+1).fill(0);
    for(let i=0;i<n;i++){
        hash[arr[i]]++;
    }
    for(let i=1;i<n;i++){
        if(hash[i]%2!==0){
            return i;
        }
    }
    return -1;
}

let arr=[8, 8, 7, 7, 6, 6, 1,1,1];
console.log(single_number(arr)); //Output => 1