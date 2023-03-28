let  reverseString=(string)=>{
    let reverse="";
    for(let i=(string.length);i>=0;i--){
       
        reverse+=string.charAt(i);
    }

    return reverse;
}

let palindromeProducts =() =>{
    let number ="";
    let reverseNumber="";

   for(let i=0; i<100;i++){
        for(let j=0;j<100;j++){
            reverseNumber=i*j;
            
            reverseNumber=reverseNumber.toString();
            number=reverseNumber;
   
            reverseNumber=reverseString(reverseNumber);
       
            if(number == reverseNumber){
                
                console.log(`${i} * ${j} = ${i*j} ,Inverted:${reverseNumber} = Common:${number}`);
            }
        }
   } 
   return 0;
}

console.log(palindromeProducts());
