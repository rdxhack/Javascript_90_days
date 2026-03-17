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