let matrix = () => {
    let multidimensionalArray = [[],[]];
    let matriz="",matrizColumns="";

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            multidimensionalArray[[i],[j]]= Math.floor(Math.random() * (10 - 1) + 1);
            matriz+="["+multidimensionalArray[[i],[j]]+"]";
            /*Not solvet yet */
            /*
            matrizColumns+="["+multidimensionalArray[[i],[j]]+"]";
            */
        }
        matriz+="\n";
        matrizColumns+="\n";
    }

    return matriz+"\n"+matrizColumns+"\n";
}

console.log(matrix());