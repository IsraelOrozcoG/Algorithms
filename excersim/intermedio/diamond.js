const valuesLetter ={
    A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26
}

let diamond = (pattern)=>{
    
    let diamond ="";
    let alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    if(pattern.length>1||isNaN(pattern) == false){
      return `Not possible just 1 letter`
    }
    pattern=pattern.toUpperCase();
    pattern =valuesLetter[pattern];
    for (let i = 1; i <= pattern; i++) {
        
        for (let j = 1; j <= pattern - i; j++) {
          diamond+='-';

        }
        
        for (let k = 0; k < 2 * i - 1; k++) {
            if(k == 0 || k ==2*i-2 ){
                diamond+=alphabet[i-1];
            }
  
            else{
          diamond+='*';
        }}
        for (let j = 1; j <= pattern - i; j++) {
            diamond+='-';
  
          }
        diamond+=`\n`;
      }
/************************** */
  for(i = pattern-1 ; i > 0; i--){
  for(let j = 1; j < pattern-i+1 ; j++ ){
    diamond +=`-`;
  }
  for(let j = 1; j <= 2 * i - 1; j++ ){
    if(j == 1 || j == 2 * i - 1 ){
      diamond += alphabet[i-1];
    }
    else{
      diamond += `*`;
    }
  }
    for(j = 1; j < pattern - i + 1; j++){
    diamond += `-`;
  }
    diamond+=`\n`;
}

    return diamond
}

let letter = 'V';
let letter2 = 'c';
let letter3 = 'rweqeQWE';
let letter4 = 2356;
let letter5 = 2;
let letter6 = `9`;
console.log(diamond(letter));
console.log(diamond(letter2));
console.log(diamond(letter3));
console.log(diamond(letter4));
console.log(diamond(letter5));
console.log(diamond(letter6));