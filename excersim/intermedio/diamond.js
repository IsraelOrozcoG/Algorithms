let diamond = (pattern)=>{
    
    let diamond ="";
    let alphabet =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

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

let letter = 25;
console.log(diamond(letter));