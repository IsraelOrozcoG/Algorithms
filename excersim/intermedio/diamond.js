let diamond = (pattern)=>{
    
    let diamond ="";

    for (let i = 1; i <= 5; i++) {
        
        for (let j = 1; j <= 5 - i; j++) {
          diamond+='*';

        }
        
        for (let k = 0; k < 2 * i - 1; k++) {
            if(k%1+k==0 ){
                diamond+=i;      
            }else{
          diamond+='*';
        }}
        for (let j = 1; j <= 5 - i; j++) {
            diamond+='*';
  
          }
        diamond+=`\n`;
      }

      for (let i = 1; i <= 5 - 1; i++) {
        
        for (let j = 0; j < i; j++) {
           diamond+=' ';
        }
        
        for (let k = (5 - i) * 2 - 1; k > 0; k--) {
          diamond+='*';
        }
        diamond+=`\n`;
      }

    return diamond
}

let letter = 10;
console.log(diamond(letter));