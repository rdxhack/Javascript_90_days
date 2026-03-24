// Given a string s, the task is to check if it is a binary string or not. 
// A binary string is a string which only contains the characters '0' and '1'.


const binary_string= (str)=>{

    for( let i=0;i<str.length;i++){
        if(str[i]!=='0' && str[i]!=='1'){
            return false
        }
    }
    return true;
}

console.log("Binary String",binary_string("01010101010"));
console.log("Binary String",binary_string("hgrkgD"));