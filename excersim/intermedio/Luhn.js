let luhn =(cardNumber) =>{
cardNumber=cardNumber.replace(/\s/g, "");
let cardSecondDigit= "";
let cardFirstDigit= "";
let operation = 0;
let result = 0;
let resultSecondDigit= "";
let concatCard = "";
    for(let i=0;i<cardNumber.length;i++){
        if(i==0 || i%2==0){
            cardSecondDigit+=cardNumber.charAt(i);
        }else{
            cardFirstDigit+=cardNumber.charAt(i);
        }
    }
    for(let i=0;i<cardSecondDigit.length;i++){
            operation=parseInt(cardSecondDigit.charAt(i))*2;
         
            if(operation>9){
                operation=operation-9;
                resultSecondDigit+=operation;
                
            }else{
                resultSecondDigit+=operation;
            }
        
    }
    
    for(let i=0;i<(cardNumber.length)/2;i++){
        
            concatCard+=resultSecondDigit.charAt(i).concat(cardFirstDigit.charAt(i));
        
       
    }
    
    for(let i=0;i<concatCard.length;i++){
            result+=parseInt(concatCard.charAt(i))
           
    }
     if(result%10==0){
        return `Valid Card Number`;
     }
     return `Invalid Card Number`;
        }

let myCard ="4539 3195 0343 6467";
let myOtherCard ="8273 1232 7352 0569";
console.log(luhn(myCard));
console.log(luhn(myOtherCard));