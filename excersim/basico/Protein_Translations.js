let proteinName = {
    AUG: "Methionine",
    UUU: "Phenylalanine", 
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine", 
    UCG: "Serine",
    UAU: "Tyrosine", 
    UAC: "Tyrosine",
    UGC: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
  };
function protein_translation(rna){
    let helper="";
    let protein="";
    if(rna.length%3!=0){
        return "RNA not complete "
    }
    for(let i=0;i<rna.length;i++){
        helper+=rna.charAt(i);
        //console.log(helper+"\t");

        if(helper.length==3){
            
            if(proteinName[helper]==="STOP"){
                return protein;
            }
            if(proteinName[helper]===undefined){
                return "Error Invalid condon =>"+helper;
            }
        //    console.log(helper+"\n");
            protein+= proteinName[helper]+" ";
            helper="";
        }
    }
    return protein
}

let protein="AUGUUUUCUUAAAUG";

console.log(protein_translation(protein));