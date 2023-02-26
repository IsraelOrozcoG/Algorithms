let nucleotideCount =(strand) =>{
    let valid=/^[acgt]/i
    let a=0,c=0,g=0,t=0;
    if(valid.test(strand)){
        for(let i=0;i<=strand.length;i++){
             strand.charAt(i)=='a'||strand.charAt(i)=='A'? a++
            :strand.charAt(i)=='g'||strand.charAt(i)=='G'? g++
            :strand.charAt(i)=='c'||strand.charAt(i)=='C'? c++
            : t++;
            
        }
        return console.log(`"${strand}"->'A':${a},'C':${c},'G':${g},'T':${t}`);
    }else{
        return console.log(`"INVALID"->error`);
    }
}

let adn="AGGCCTTA";
let adn2="AAAGGGGGGTTTTTCCCCCCAGCT";
let adn3="FLKSKATTA"
nucleotideCount(adn);
nucleotideCount(adn2);
nucleotideCount(adn3);