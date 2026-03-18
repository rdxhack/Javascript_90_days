// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// 
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


const product_array = (arr) => {
    let n = arr.length ;
    
    let arr2 =[];
    for ( let i =0 ; i <n; i++){
        let ans = 1;
        for ( let j = 0 ;j< n ; j++){
            if(i==j){
                continue ;
            }
            else{
                ans *=arr[j];
                
            }
            
        }
        arr2.push(ans);
    }
    return arr2;
}

let nums =[-1,1,0,-3,3];
console.log(product_array(nums));

const product_array_data = (arr)=>{
    let n =arr.length;
    let answer = new Array(n).fill(1);
    let prefix =1;
    let surfix =1;
    for(let i =0; i<n; i++){
        answer[i]*=prefix;
        prefix*=arr[i];
    }
    for(let i =n-1; i>=0; i--){
        answer[i]*=surfix;
        surfix*=arr[i];
    }
    return answer;
}

console.log(product_array_data(nums),"console.log(product_array(nums));");