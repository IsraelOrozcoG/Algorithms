function rotationalCipher(rot,phrase){
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let isAlphabet=/[a-z]/i
    let placeOfLetter= 0;
    let encrypth = ``;
    rot=rot.toLowerCase();
    /* Verify valid input */
    if(isAlphabet.test(rot)== false || rot.length>1){
        return -1;
    } 
    /*Obtain the value */
    while( rot != alphabet.charAt(placeOfLetter) ){
        placeOfLetter++;
    }

for(let j = 0;j<phrase.length;j++ )
{
for(let i=0;i<alphabet.length;i++)
{
        if(phrase.charAt(j)==alphabet.charAt(i))
        {
            if(i+placeOfLetter > 25){

                encrypth +=alphabet.charAt((i+placeOfLetter)-25-1);
            }else{
            encrypth +=alphabet.charAt(i+placeOfLetter);
            }
        }

    }}
    return  `Phrase ${phrase} , encription ${rot} => ${encrypth}`;

}

let rot=`z`;
let phrase = `malaquite`;
console.log(rotationalCipher(rot,phrase));