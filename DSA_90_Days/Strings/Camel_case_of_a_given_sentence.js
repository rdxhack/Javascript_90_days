// Given a sentence having lowercase characters, the task is to convert it to Camel Case.
//  In Camel Case, words are joined without spaces, the first word keeps its original case, 
// and each subsequent word starts with an uppercase letter.


const camel_case =(str)=>{
    
    let res = [];
    let capitalizeNext = false;
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            capitalizeNext = true;
        }
        else if (capitalizeNext ==true){
             res.push(str[i].toUpperCase());
             capitalizeNext = false;
        }
        else{
            res.push(str[i]);
        }
    }
    return res ;
}
let s = "i got intern at geeksforgeeks lav kush";

console.log(camel_case(s).join(""));