function nucleotideCount(nucleotide){
    let a=0,c=0,g=0,t=0;
    let countedNucleotide=""
    for(i=0;i<=nucleotide.length;i++){
        nucleotide.charAt(i)==="A"?a++
        :nucleotide.charAt(i)==="C"?c++
        :nucleotide.charAt(i)==="G"? g++
        :t++;
        /*
        if(nucleotide.charAt(i)==="A"){
            a++;
        }
        if(nucleotide.charAt(i)==="C"){
            c++;
        }
        if(nucleotide.charAt(i)==="G"){
            g++;
        }
        if(nucleotide.charAt(i)==="T"){
            t++;
        }
        /*
        return "Error there is no "+nucleotide.charAt(i)+"check the nucleotide";*/
    }
    return countedNucleotide =nucleotide+"-> A:"+a+" C:"+c+" G:"+g+" T:"+t;
}
let nucleotide="AAGCTACA";

console.log(nucleotideCount(nucleotide))