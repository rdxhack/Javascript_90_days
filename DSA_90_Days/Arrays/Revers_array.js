
// Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, 
// the second element becomes second last and so on.



const Reverse = ( arr ) => {
    const result = [];
    const n =arr.length;
    for ( let i = n-1 ; i>=0 ; i--) {
        result.push(arr[i]);
    }
    return result ;
}

const arr = [10, 20, 30, 40, 50] ;
console.log(Reverse(arr));

const Reverse_array =(arr,left=0,right= arr.length-1)=>{
    
    if(left>=right){
        return arr;
    }
    [arr[left],arr[right]]=[arr[right],arr[left]]
    return Reverse_array(arr,left+1,right-1);
}
console.log(Reverse_array(arr));