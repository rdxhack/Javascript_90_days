// To sort an array in JavaScript, we can use array.sort() method. This method sorts the elements alphabetically in ascending order.


let arr =  ["JS", "HTML", "CSS"]; ;
console.log(arr.sort(),"Sorted Array");
 let arr1 = [ 10, 20, 25, 100 , 40];
 console.log(arr1.sort((a,b) => a-b)); ///
 console.log(arr1.sort((a,b) => b-a));


 let arr2 = [
    { name: 'Rahul', age: 28 },  
    { name: 'Jatin', age: 25 },   
    { name: 'Vikas', age: 32 },  
    { name: 'Rohit', age: 35 }   
];

console.log(arr2.sort((a,b) => b.age-a.age));