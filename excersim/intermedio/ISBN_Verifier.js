let isbnVerifier =(isbn) =>{
    let isbnString = isbn ;
    isbn=isbn.replace(/\-/g, "");
    let flag = 0;
    let toNumber = 0 , multiplier = 10;
    let calculate = 0;
    if(isbn.length!=10){
        return console.log("No valid ISBN");
    }
    while( flag < 10 ){
        /*Other way to cast string to number  = + */
        toNumber= + isbn.charAt(flag);
        calculate += toNumber * multiplier;
        
        multiplier --;
        flag ++;
    }
     
    return calculate % 11 == 0 ? `The ISB ${isbnString} is valid`: `The ISB ${isbnString} is not valid`
}

let isbn = "3-598-21508-8";

console.log(isbnVerifier(isbn));