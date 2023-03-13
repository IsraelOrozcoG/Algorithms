let pangram=(text)=>{
    
    let regex =/([a-z])(?!.*\1)/gi; //All alphabet [a-z] at least 1 time each letter ignore lowercase uppercase  g global
    let result = text.match(regex).length === 26; 
    return result==true?`It is a pangram` :`Not a pangram`;
    
}

let phrase=`The quick brown fox jumps over the lazy dog.`;
let phrase2=`Pack my box with five dozen liquor jugs`;
let phrase3=`The five boxing wizards jump quickly`;
let phrase4=`This is not a pangram`;

console.log(`The text ${phrase}  ${pangram(phrase)}`);
console.log(`The text ${phrase}  ${pangram(phrase2)}`);
console.log(`The text ${phrase}  ${pangram(phrase3)}`);
console.log(`The text ${phrase}  ${pangram(phrase4)}`);
