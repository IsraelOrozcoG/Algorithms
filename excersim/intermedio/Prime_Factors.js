let primeFactors = (number) =>{
        let i=2;
        let factors="";
        let mynumber=number;
        
        if(number==1 || number==2){
            return `Prime factors of ${mynumber}: ${number}`;
        }

    do{
        if(number%i==0){           
            number=number/i;
            factors+=`${i},`; 
              
        }
        if(number%i!=0){
        i++;
        }
       
    }while((number/i)!=1)
    return `Prime factors of ${mynumber} :${factors}${i}`;
}

let number = 90;
console.log(primeFactors(number))