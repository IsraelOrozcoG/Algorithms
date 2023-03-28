let diamond = (pattern)=>{
    let j=0;
    let diamond ="";

    for(let i=1;i<pattern;i++){
        for(let j=1;j<pattern;j++){
            if(j==pattern-1){
            diamond+="*";
            }
        }
            diamond+=`l \n`;
    }

    return diamond
}

let letter = 7;
console.log(diamond(letter));