let pigLatin =(text) =>{

    let vowelStart =/^[a|e|i|o|u]\D+[a-z]/ig;


    text=text.toLowerCase();
    let vowels =/^[a|i|e|o|u]/ig
    let letters="";
    let flag = false;
    let j=0;
    let letter = "";

    if(vowelStart.test(text)==false){
        do{
            letter = text.charAt(j);
            if(vowels.test(letter)==false){
                letters+=text.charAt(j);               
            }
            else{
                flag=true;
            }
            j++;
        }while(flag!=true)
        text = text.replace(letters, "");
        text+= `${letters}ay`
    }
    else{
        text+=`way`;
    }

    return `${text}  ${letters}` ;
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