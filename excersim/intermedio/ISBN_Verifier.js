let isbnVerifier =(isbn) =>{
    isbn=isbn.replace(/\-/g, "");
    if(isbn.length!=10){
        return console.log("No valid ISBN");
    }
    console.log(isbn);
}

let isbn = "3-598-21508-8";

isbnVerifier(isbn);