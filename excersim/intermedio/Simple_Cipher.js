const ALPHABET=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let simpleCipher=(text,letter)=>{
    text=text.toLowerCase();
    let encrypted ="";
    let position = [];
    let alphabetValue =0;
    let letterValue = 0
    letterValue=ALPHABET.indexOf(letter.charAt(0));
    
    for(let i=0 ;i<text.length;i++){
        //console.log(text.charAt(i));
        position.push(ALPHABET.indexOf(text.charAt(i)));
        //console.log(position);
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
    console.log(`Well it seems->${encrypted}`)
    console.log(text);
}
let phrase="Estoesunmensajetipico";
let encode="z";
simpleCipher(phrase,encode);