// Given an array arr[], the task is to print every alternate element of the array starting from the first element.

// 
const alternate = ( arr ) => {
    const result =[];
    const n =arr.length;
    for(let i =0 ; i <n ; i+=2) {
        result.push(arr[i])
    }
    return result;
}

const arr = [10, 20, 30, 40, 50] ;
console.log(alternate(arr));
