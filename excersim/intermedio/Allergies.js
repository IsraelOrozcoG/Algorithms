const ALLERGIES ={
        eggs:1,
        penauts:2,
        shellfish:4,
        strawberries:8,
        tomatoes:16,
        chocolate:32,
        pollen:64,
        cats:128,
        shrimp:256,
        sun:512,
        gluten:1024
};

const ALLERGIES_VALUES ={
        0:'',
        1:'eggs',
        2:'penauts',
        4:'shelfish',
        8:'strawberries',
        16:'tomatoes',
        32:'chocolate',
        64:'pollen',
        128:'cats'
};

let allergies=(myAllergies)=>{
        let allergiesValue =[];
        let totalValue=0;
        console.log(myAllergies.length);
        for(let i=0;i<myAllergies.length;i++){
                allergiesValue.push(ALLERGIES[myAllergies[i]]);
                totalValue+=allergiesValue[i];
        }

        return totalValue;
}

let allergiesScore=(value) =>{
        let allergiesScore =[];
        let result =0;
        let j=0;
        let qpasa=0;
        result = value.toString(2);
        binaryValues=0;
        allergieName ="";

        for(i=result.length;i>=0;i--){
                                   
                        allergiesScore.push((result.charAt(i))*(Math.pow(2, j-1)));
                        allergieName+= `${ALLERGIES_VALUES[allergiesScore[j]]} `;
                        j++; 
        }
       

        return allergieName;
}

let personAllergies =["eggs", "penauts", "pollen"];
let personScore=127;
console.log(allergies(personAllergies));
console.log(allergiesScore(personScore));
