function difference_Squares(n){
    let addPow=0,addPowTotal=0,total=0;
    for(let i=0;i<=n;i++){
        addPow+=i**2;  
        addPowTotal+=i;     
    }
    addPowTotal=addPowTotal**2;
    total=addPowTotal-addPow;
    return total;
}

let times=10;
console.log(difference_Squares(times));