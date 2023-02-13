// create an array
function rail_Fence(phrase) {
    //let phrase="Requiremoreminerals";
    let matriz = new Array(phrase.length);
    let matrix = "";
    let series = [];

    for (let i = 1; i < phrase.length / 3; i++) {
        series.push((4 * i) - 2);
    }

    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = [];
    }

    let h = 0;

    //Asign elements
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= phrase.length; j++) {

            if ((i == 0 && j % 4 == 0) || (i == 1 && j % 2 != 0) || (i == 2 && (series.find(element => element == j)))) {

                matriz[i][j] = phrase[h++];
                if (matriz[i][j] === undefined) {
                    matriz[i][j] = "*";
                }
            } else {
                matriz[i][j] = "-";
            }
        }
    }
    //shwo elements
    for (let i = 0; i < 3; i++) {
        matrix += "["
        for (let j = 0; j <= phrase.length; j++) {


            matrix += matriz[i][j];
        }
        matrix += "]\n";
    }
    return console.log(matrix);
}

let phraseInput = "Thisisatestformynotfunctionalencoder";
let frase = "Estafrasevaparatibebe"
console.log(rail_Fence(phraseInput));