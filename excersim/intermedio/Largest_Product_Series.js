let largestSeriesProduct = (series,span) =>{
    let size = number.length;
    let flag  = 0;
    let concat = ``;
    let collection= [];
    let aux = ``;

    for(let i = 0 ; i< size*span; i+=span){
        for(let j = 0; j < span; j++){
            concat += series.charAt(flag);
            flag ++;
            
        }
            
            if(concat.length == span){
                collection.push (concat);
            }
            concat += `\n`;
            flag -=(span-1);
            concat = ``;
            //concat += series.charAt(i);
            
            
    }

    return `Coleccion ${collection}`;
} 

let quantity = 2;
let number ="987654321";

console.log(largestSeriesProduct(number,quantity));