// Given a binary string s, the task is to count all substrings that start and end with the character '1'.
//  A valid substring must have both its first and last characters as '1',
//  and can include one or more number of characters in between.


const count_string =(str)=>{
    let count = 0;
    for(let i=0 ; i<str.length ; i++){
        if(str[i]==='1'){
            for(let j=i+1;j<str.length;j++){
                if(str[j]==='1'){
                    count++;
                }
            }
        }
    }
    return count ;
}

let s = "00100101";
console.log(count_string(s))