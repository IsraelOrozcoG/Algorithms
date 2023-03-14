let rnaTranscription=(nucleotide1,nucleotide2,nucleotide3,nucleotide4)=>{
    let strand=[nucleotide1,nucleotide2,nucleotide3,nucleotide4];
    let newStrand="";
    for(let i=0;i<strand.length;i++){
        console.log(strand[i]);
        switch (strand[i]) {
            case "a":
                newStrand+="u";
                break;
            case "g":
                newStrand+="c";
                break;
            case "c":
                newStrand+="g";
                break;
            case "t":
                newStrand+="a"
                break;
        
        }
    }
    return newStrand;
}

let s1="a",s2="g",s3="c",s4="t";
console.log("The RNA is "+rnaTranscription(s1,s2,s3,s4));