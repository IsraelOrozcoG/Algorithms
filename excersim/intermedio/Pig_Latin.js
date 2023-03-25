let pigLatin =(text) =>{
    text=text.toLowerCase();
    let vowelStart =/^[a|e|i|o|u]\D+[a-z]/ig;
    if(vowelStart.test(text)==false){
        text+=text.charAt(0)+"ay";
        text=text.replace(/^[a-z]/g,"")
    }else{
        text+="way";
    }

    return text;
}

let phrase ="Mouse";
let phrase2="algorithm";
let phrase3="eight";
let phrase4 ="california";
let phrase5 ="pharagraphs";
let phrase6 ="glove";
let phrase7 ="schwartz";
let phrase8 ="rythm";

console.log(pigLatin(phrase));
console.log(pigLatin(phrase2));
console.log(pigLatin(phrase3));
console.log(pigLatin(phrase4));
console.log(pigLatin(phrase5));
console.log(pigLatin(phrase6));
console.log(pigLatin(phrase7));
console.log(pigLatin(phrase8));