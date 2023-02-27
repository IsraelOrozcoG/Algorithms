const ALPHABET=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z"];

let simpleCipher=(text)=>{
    text=text.toUpperCase();
    let encrypted ="";
    let position = [];
    let helpVariable =0;
    for(let i=0 ;i<text.length;i++){
        console.log(text.charAt(i));
       
        position.push(ALPHABET.indexOf(text.charAt(i)));
        console.log(position);
    }
    for(let j=0;j<text.length;j++){
        helpVariable=position[j];
        position[j]=helpVariable+2;
    }
    for(let i=0; i<text.length;i++){
        //helpVariable=position[i];
        //position[i]=helpVariable-2;
    encrypted+=ALPHABET[position[i]];
    }
    console.log(`Well it seems->${encrypted}`)
    console.log(text);
}
let phrase="thereissomethinghere";
simpleCipher(phrase);