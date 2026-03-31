
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

const largest_number =(arr)=>{
    let n= arr.length;
    return Math.max(...arr);
}
let arr =[0,3,30,34,59,39];

console.log((largest_number(arr)))


const form_largest_number =(nums)=>{
    nums = nums.map(String);
    nums.sort((a, b) => (b + a).localeCompare(a + b));
    const result = nums.join('');
    return result[0] === '0' ? '0' : result;

}
console.log((form_largest_number(arr)))