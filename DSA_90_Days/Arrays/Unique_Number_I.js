// Given an array of integers, every element in the array appears twice except for one element which appears only once. 
// The task is to identify and return the element that occurs only once.

const unique_number = (arr) => {
    const n = arr.length;
    let map={};
    for(let num of arr){
        map[num] = (map[num] || 0)+1;
        // console.log(num);
    }
    for(let key in map){
        if(map[key]===1){
            return Number(key);
        }
    }
}
let arr = [9,3,5,4,5,3,4]
console.log(unique_number(arr),"Unique");


const unique_number_data = (arr) => {
    let unique_number =0;
    for(let num in arr){
        unique_number ^= arr[num];  //XOR
        console.log(unique_number);
    }
    return unique_number;
}

console.log(unique_number_data(arr),"unique_number_data")