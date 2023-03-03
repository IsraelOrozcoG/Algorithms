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

let allergies=(name,myAllergies)=>{
        let allergiesValue =[];
        let totalValue=0;
        let flag=0;
        //console.log(myAllergies.length);
        for(let i=0;i<myAllergies.length;i++){               
                allergiesValue.push(ALLERGIES[myAllergies[i]]);
                flag=allergiesValue[i];
               // console.log(flag+"somethign");
                if(isNaN(flag)){
                        totalValue+="";
                }else{
                totalValue+=allergiesValue[i];
                }
        }

        return `The pacient named ${name} has a score of ${totalValue} of the following  allergies: ${myAllergies}`;
}

let allergiesScore=(name,value) =>{
        let allergiesScore =[];
        let result =0;
        let j=0;
        result = value.toString(2);
        binaryValues=0;
        allergieName ="";

        for(i=result.length;i>=0;i--){
                                   
                        allergiesScore.push((result.charAt(i))*(Math.pow(2, j-1)));
                       
                        if(allergiesScore[j]<128 ){
                                allergieName+=`${ALLERGIES_VALUES[allergiesScore[j]]} `;
                                
                        }else{ 
                                allergieName+="";
                                }
                        j++;
        }
        return `The pacient named ${name} has the folowing allergies: ${allergieName}with a total score of ${value}`;;
}

let personAllergies =["eggs", "penauts", "pollen","cats"];
let pacientName ="Hector";
let otherPacient ="Julia";
let personScore=31;
console.log(allergies(pacientName,personAllergies));
console.log(allergiesScore(otherPacient,personScore));
