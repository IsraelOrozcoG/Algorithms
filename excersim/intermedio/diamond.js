let diamond = (pattern)=>{
    
    let diamond ="";
    let primes = {1:1, 2:2, 3:3,   5:5,   7:7,  11:11,  13:13,  17:17,  19:19,  23:23};

    for (let i = 1; i <= pattern; i++) {
        
        for (let j = 1; j <= pattern - i; j++) {
          diamond+='-';

        }
        
        for (let k = 0; k < 2 * i - 1; k++) {
            if(k == 0 || k ==2*i-2 ){
                diamond+=i;
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
/*
      for (let i = 1; i <= 5 - 1; i++) {
        
        for (let j = 0; j < i; j++) {
           diamond+=' ';
        }
        
        for (let k = (5 - i) * 2 - 1; k > 0; k--) {
          diamond+=i;
        }
        diamond+=`\n`;
      }*/

    return diamond
}

let letter = 5;
console.log(diamond(letter));