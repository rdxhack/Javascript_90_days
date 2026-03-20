let A = '    Geeks for Geeks ';

console.log(A.slice(0,3)) // Slice(start, end) or (o,2)
console.log(A.slice(3)) // (start and all data)

let str = "Mind, Power, Soul";
console.log(str.substring(1,8))

console.log(str.replace("Power", "Space"));
console.log(str,"<=original str")

console.log(str.replaceAll("Power", "Space"));

console.log(A.concat(str))
console.log(A.trim())
console.log(A.trimEnd())
console.log(A.trimStart())

// Length of a String
console.log(str.length,"Length of a String")
// Check for Same
let str2=str
console.log(str===A ?true :false);
console.log(str === str2);

// Search a Character
const search = (str,ch)=>{
  return str.search(ch)!== -1;
}

console.log(search('human','A'),"Search a Character");
console.log(search('god','g'),"Search a Character");

//Insert a Character

const insert = (str,pos,ch)=>{
 let srt_res=str.slice(0,pos) + ch + str.slice(pos)
 return srt_res;
}
console.log(insert('Geeks',3,'A'),"Insert a Character");


// Remove a Character
const Remove = (str ,pos) =>{
 return str.slice(0,pos) + str.slice(pos+1);
}
console.log(Remove('abcde',1),"Remove a Character");


// Remove all occurrences
let str4 = "ababbjddksd";
console.log(str4.replaceAll('a',''));

// Reverse a String

const Reverse =()=>{
    
}