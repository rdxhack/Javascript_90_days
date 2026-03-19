// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const sum_target = (arr,target) =>{
    let n =arr.length ;
    // let p1= 1 ;
    // let p2 = n+1 ;
    let arr1 =[];

    for(let i = 0 ;i <n ;i++){
        for(let j= i+1;j<n;j++){
            if(arr[i]+arr[j]==target){
                arr1.push(i);
                arr1.push(j)
            }
        }
    }
    return arr1;
}



let nums = [6,2,7,11,15]; 
let target = 9 ;
console.log(sum_target(nums,target).join(" "));


const two_sum_pointer = (arr,target)=>{
    const n = arr.length;
    let left = 0;
    let right = n-1;
    arr.sort((a, b) => a - b);
    while(left<right){
        let mid = arr[left]+arr[right];
        if(mid==target){
            return true;
        }
        else if (mid<target){
            left++;
        }
        else{
            right--;
        }
    }
    return false
}

console.log(two_sum_pointer([0, -1, 2, -3, 1],-2))