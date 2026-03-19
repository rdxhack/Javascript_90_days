// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target || nums[i]>target){
            return i;
        }
        if (i+1==nums.length){
            return i+1;
        }
        // console.log(i)
    }
    return -1 ;
};

console .log(searchInsert([1,3,5,6],7))


// Proper O(log n) solution (binary search):

const binary_serach = (arr,target) =>{
    let left =0;
    let right =arr.length-1;
    while(left<=right){
        let mid =  Math.floor((left + right) / 2);
        if(target===arr[mid]){
            return mid ;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else {
            right= mid-1;
        }

    }
    return left;
}

console .log(binary_serach([1,3,5,6],7))