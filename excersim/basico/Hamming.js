function hamming(strand1,strand2){
    let distance=0;
    if(strand1.length!=strand2.length){
        return "not the same length";
    }
    for(i=0;i<=strand1.length;i++){
        if(strand1.charAt(i)!=strand2.charAt(i)){
            distance ++;
        }
    }
    return "The Hamming Distance is "+distance;
}

let s1="GAGCCTACTAACGGGAT",s2="CATCGTAATGACGGCCT";

console.log(hamming(s1,s2));
