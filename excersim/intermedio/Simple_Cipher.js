const ALPHABET=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let simpleCipher=(text,letter)=>{
    let originalMessage =text;
    text=text.toLowerCase().replace(/\s/g, "");
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
        if((letterValue+alphabetValue)>26){
            letterValue=(alphabetValue+letterValue)-26;
            position[j]=letterValue; 
        }else{
        position[j]=alphabetValue+letterValue;
        }
    }
    for(let i=0; i<text.length;i++){
    encrypted+=ALPHABET[position[i]];
    }
    console.log(` Your message :${originalMessage}->${encrypted}`);
    return `${encrypted}`;
} 
}

let simpleDecipher=(encryptedMessage,letter)=>{
        let dencrypted ="";   
        let position = [];
        let alphabetValue =0;
        let letterValue = 0;

        letterValue=ALPHABET.indexOf(letter.charAt(0));
 

        for(let i=0 ;i<encryptedMessage.length;i++){
        position.push(ALPHABET.indexOf(encryptedMessage.charAt(i)));
    }

        for(let j=0;j<encryptedMessage.length;j++){
        alphabetValue=position[j];

        if(alphabetValue-letterValue<0){
            letterValue=26-(alphabetValue-letterValue);

            position[j]=letterValue; 
        }else{
        position[j]=alphabetValue-letterValue;

        }
    }
        for(let i=0; i<encryptedMessage.length;i++){
        dencrypted+=ALPHABET[position[i]];
    }

    console.log(dencrypted);
}


let phrase="This is a typical message";
let encode="b";
let encryptedMessage="";
encryptedMessage=simpleCipher(phrase,encode);
console.log(encryptedMessage);
simpleDecipher(encryptedMessage,encode);
