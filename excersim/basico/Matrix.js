let matrix = () => {
    let multidimensionalArray = [[],[]];
    let matriz="",matrizColumns="";

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            multidimensionalArray[[i],[j]]= Math.floor(Math.random() * (10 - 1) + 1);
            matriz+="["+multidimensionalArray[[i],[j]]+"]";

        }
        matriz+="\n";
        
    }
    for (let i = 0; i <= 2; i++) {
        for (let j = 2; j >= 0; j--) {

            matrizColumns+="["+multidimensionalArray[[i],[j]]+"]";
            
           
        }
        
        matrizColumns+="\n";
    }

    return matriz+"\n"+multidimensionalArray+"\n";
}

console.log(matrix());