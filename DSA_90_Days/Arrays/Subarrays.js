// Given an array arr[], the task is to generate all the possible subarrays of the given array.

const subaray = (arr) => {
   
    const n = arr.length ;
    for(let i = 0 ; i<n ;i++){
        for(let j = i ; j<n ; j++){
            const result =[];
            for(let k=i ; k<=j ; k++){
                
                result.push(arr[k]);
            }
            console.log(result.join(" "));
        }
    }

}

const arr = [1, 2, 3, 4];
console.log("All Non-empty Subarrays:",subaray(arr));
// subaray(arr);