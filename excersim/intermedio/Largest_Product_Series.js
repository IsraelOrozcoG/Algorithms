let largestSeriesProduct = (series,span) =>{
    let size = number.length;
    let flag  = 0;
    let concat = ``;
    let collection= [];
    const productSeries = [];
    let operation = 0, result = 1;
    let arr = [[,]]; //Unite 2 arrays


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

    let obj = Object.fromEntries(arr);
   


    obj=Object.entries(obj).sort((a,b) => b[1]-a[1])
  
  



    return `The highest product of ${series}: \n Using steps of ${span} by ${span} are the numbers ${obj [0]} as a result`;
} 

let quantity = 3;
let number ="63915";

console.log(largestSeriesProduct(number,quantity));