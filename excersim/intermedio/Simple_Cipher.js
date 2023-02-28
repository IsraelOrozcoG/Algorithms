const ALPHABET=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let simpleCipher=(text,letter)=>{
    let originalMessage =text;
    text=text.toLowerCase().replace(/\s/g, "");
    let letterValid =/[^a-z]/gm;
    let encrypted ="";   
    let position = [];
    let alphabetValue =0;
    let letterValue = 0;
    if((letter=="")){
        return console.log("Empty  letter");
    }else{
    letterValue=ALPHABET.indexOf(letter.charAt(0));
    
    for(let i=0 ;i<text.length;i++){
        position.push(ALPHABET.indexOf(text.charAt(i)));
    }
        for(let j=0;j<text.length;j++){
        alphabetValue=position[j];
        if(letterValue+alphabetValue>26){
            letterValue=(alphabetValue+letterValue)-26;
            position[j]=letterValue; 
        }else{
        position[j]=alphabetValue+letterValue;
        }
    }
    for(let i=0; i<text.length;i++){
        //alphabetValue=position[i];
        //position[i]=alphabetValue-2;
    encrypted+=ALPHABET[position[i]];
    }
    console.log(` Your message :${originalMessage}->${encrypted}`)
} 
}
let phrase="This is a typical message";
let encode="m";
simpleCipher(phrase,encode);