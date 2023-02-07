    // create an array
    let matriz = new Array(3);
      let matrix="";
    //create a 2d array using an array

    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = [];
    }

    let h = 0;
    let s = "Wearegood";
    //Asign elements
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(i==j){
                matriz[i][j] = s[h++];
            }else{
            matriz[i][j] = "-";
        }
    }
    }


      
   //shwo elements
    for (let i = 0; i < 3; i++) {
        matrix+="["
        for (let j = 0; j < 3; j++)
      
        {

           
            matrix+=matriz[i][j];
        }
        matrix+="]\n";
    }
    console.log(matrix)