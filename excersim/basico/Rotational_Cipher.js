function rotationalCipher(rot){
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let isAlphabet=/[a-z]/i
    let placeOfLetter= 0;
    rot=rot.toLowerCase();
    if(isAlphabet.test(rot)== false || rot.length>1){
        return -1;
    } 
    while( rot != alphabet.charAt(placeOfLetter) ){
        placeOfLetter++;
    }
    return placeOfLetter;

}

let rot=`h`;
console.log(rotationalCipher(rot));