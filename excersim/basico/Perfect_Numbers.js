let perfectNumbers=(num)=>{
    let addNumber=0;
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            addNumber+=i;    
        }
    }
    if(num==addNumber){
        return "Perfect";
    }
    if(num>addNumber){
        return "Abundant";
    }else{
        return "Deficient";
    }
}
let n1=28,n2=36,n3=7;
console.log(perfectNumbers(n1));
console.log(perfectNumbers(n2));
console.log(perfectNumbers(n3));