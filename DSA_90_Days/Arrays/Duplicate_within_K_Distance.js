
// Given an integer array arr[] and an integer k, 
// determine whether there exist two indices i and j such that arr[i] == arr[j] and |i - j| ≤ k. If such a pair exists, 
// return 'Yes', otherwise return 'No'.


const duplicate = ( arr,k ) =>{
    const n= arr.length;

    for(let i=0 ;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]==arr[j]){
                if(Math.abs(i-j)<=k){
                    return true ;
                }
            }
        }
    }
    return false ;

}
const arr =[1, 2, 3, 4, 1, 2, 3, 4];
const k1 =3;
const arr2 = [1, 2, 3, 1, 4, 5] ;
const k2=3;

console.log(duplicate(arr,k1)?"YES":"NO");
console.log(duplicate(arr2,k2)?"YES":"NO");