
// Given an unsorted array arr[] of size n, containing elements from the range 1 to n,
//  it is known that one number in this range is missing, and another number occurs twice in the array, 
// find both the duplicate number and the missing number.


const repeat_number = (arr)=>{
    let n = arr.length;
    let sum =n*(n*2)/2
    let result =0;
    let missing ;
    for(let i=0;i<n;i++){
        result +=arr[i];
        // if(arr[i]===arr[i+1])
        for(let j=i+1;j<n;j++){
            if(arr[i]===arr[j]){
                missing=arr[i];
            }
        }
    }
    result =Math.abs(result-sum);
    return [missing,result];
}

const arr = [3, 1, 3];
console.log(repeat_number(arr))


const missing =(arr)=>{
    let n = arr.length;
    let duplicate ;
    let missing ;
   let hash = new Array(n + 1).fill(0);
   for(let i=0;i<n;i++){
        hash[arr[i]]++;
   }
   for(let i=1;i<n+1;i++){
    if(hash[i]===2)duplicate=i;
    if(hash[i]===0)missing=i
   }
   return [duplicate,missing]
}

console.log(missing(arr));