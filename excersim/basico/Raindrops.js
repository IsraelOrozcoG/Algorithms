function raindrops(value){
let phrase="";

if(value%3==0){
    phrase+="Pling"
}
if(value%5==0){
    phrase+="Plang"
}
if(value%7==0){
    phrase+="Plong"
}
if(value%7!=0&&value%5!=0&&value%3!=0) {
    return value;
}  
return phrase;
}

let v1=28,v2=30,v3=34;

console.log(raindrops(v1));
console.log(raindrops(v2));
console.log(raindrops(v3));