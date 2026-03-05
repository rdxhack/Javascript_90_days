// Given an array of integers arr[],
//  move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.


const remove = (arr) => {
    const n = arr.length;
    const result =[];
    let index =0;
    for ( let i =0 ; i <n ; i++){
        if(arr[i]!==0){
           arr[index]=arr[i];
           index++;
        }
    }
    while (index < arr.length) {
        arr[index]=0;
        index++;
    }
   return arr ;

}

function remove_zero(arr){
    const result =[];
    for(let i =0 ; i < arr.length ;i++){
        if(arr[i]>0){
            result.push(arr[i]);
        }
    }
    while(result.length< arr.length){
        result.push(0);
    }
    return result ;
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(remove(arr));
console.log(remove_zero(arr).join(" "));