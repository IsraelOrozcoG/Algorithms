function rotationalCipher(rot){
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let cipher="";
    let i=0;
    if(rot==26|| rot<0){
        return `Outside the alphabet`;
    }
    console.log(alphabet.charAt(rot));
    do{
        
        cipher+=alphabet.charAt(rot+i);
        console.log(cipher)
        i++;
    }while(i!=26)
}

let rot=-1;
console.log(rotationalCipher(rot));