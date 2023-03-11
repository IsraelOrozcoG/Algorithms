let acronym=(text)=>{
    let myAcronym="";
    for(let i=0;i<text.length;i++){
        if(i==0){
            myAcronym+=text.charAt(i);
        }
        if(text.charAt(i)==" "){
            myAcronym+=text.charAt(i+1);
        }
    }
    return myAcronym.toUpperCase();
}
let phrase="This is pretty Awesome"
let phrase2="What does that supposed to mean?"
console.log(acronym(phrase));
console.log(acronym(phrase2));