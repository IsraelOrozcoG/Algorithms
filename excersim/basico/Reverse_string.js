let  reverseString=(string)=>{
    let reverse="";
    for(let i=(string.length);i>=0;i--){
        console.log(string.charAt(i));
        reverse+=string.charAt(i);
    }

    return reverse;
}
let string1="Loop", string2="Pool",string3="Anita";

console.log(reverseString(string1));
console.log(reverseString(string2));
console.log(reverseString(string3));