let romanNumerals=(number)=>{
    
    let romanNumber="";
    let help;
    let unit=["","I","II","III","IV","V","VI","VII","VIII","IX"];
    let deceins=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let centen=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let miles=["","M","MM","MMM"];
    
    if(number.isNaN || number<=0 || number>3999){
        return "Not Posible";
    }

    if(number>=1000){
    help=Math.trunc(number/1000);
    romanNumber+=miles[help];
    number=number%1000;
    }
    
    if(number>=100){
        help=Math.trunc(number/100);
        romanNumber+=centen[help];
        number=number%100;
    }
    
    if(number>=10){
        help=Math.trunc(number/10);
        romanNumber+=deceins[help];
        number=number%10;
    }
    
    if(number<10){
        help=Math.trunc(number/1);
        romanNumber+=unit[help];
        number=number%1;
    }
    
    return romanNumber;
}

let myNumber=3001;
for(let i=1;i<3001;i++){
    
console.log(`${i} = ${romanNumerals(i)}`);
}