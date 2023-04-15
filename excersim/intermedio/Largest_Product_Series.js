let largestSeriesProduct = (series,span) =>{
    let size = number.length;
    let flag  = 0;
    let concat = ``;
    let collection= [];
    const productSeries = [];
    let operation = 0, result = 1;
    let arr = [[,]]; //Para unir los 2 arrays


    for(let i = 0 ; i< size*span; i+=span){
        for(let j = 0; j < span; j++){
            concat += series.charAt(flag);
            operation = + series.charAt(flag)
            result *= operation;           
            flag ++;   
        }

            
            if(concat.length == span){
                collection.push (concat);
                productSeries.push(result);


                
            }
        
            
            flag -=(span-1);
            concat = ``;
            result = 1;
            
            
    }

    for (let j =0;j<=collection.length;j++){
    arr.push (  [collection[j], productSeries[j]]);
    }
    const obj = Object.fromEntries(arr);
    console.log(obj);


    
    let keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})
    console.log(keysSorted) 



    return `Multiplicaciones ${productSeries} Coleccion ${collection} `;
} 

let quantity = 6;
let number ="987654321";

console.log(largestSeriesProduct(number,quantity));