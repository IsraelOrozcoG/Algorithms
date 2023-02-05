function collatz(n){
    let numberOfSteps=0;
    do{
        if(n%2==0){
            n=n/2;
        }else{
            n=(n*3)+1;
        }
        numberOfSteps++; 
    }while(n!=1)
    return numberOfSteps;
}

let n1=100,n2=12,n3=9,n4=513;

console.log("For "+n1+" "+collatz(n1));
console.log("For "+n2+" "+collatz(n2));
console.log("For "+n3+" "+collatz(n3));
console.log("For "+n4+" "+collatz(n4));
