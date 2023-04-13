let largestSeriesProduct = (series,span) =>{
    let size = number.length;
    let flag  = 0;
    let concat = ``;

    for(let i = 0 ; i< size ; i+=span){
        for(let j = 0; j < span; j++){
            concat += series.charAt(flag);
            flag ++;
            
        }
            concat += `\n`;
            concat += series.charAt(flag-1);
            
    }

    return `${concat}`;
}

let quantity = 2;
let number ="987654";

console.log(largestSeriesProduct(number,quantity));