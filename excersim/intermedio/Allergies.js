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

let personAllergies =["eggs", "penauts", "pollen"];

console.log(allergies(personAllergies));