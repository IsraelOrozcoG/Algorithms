function rotationalCipher(rot){
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let cipher="";
    let i=0;
    console.log(alphabet.charAt(rot));
    do{
        
        cipher+=alphabet.charAt(rot+i);
        console.log(cipher)
        i++;
    }while(i!=26)
}

let rot=10;
rotationalCipher(rot);