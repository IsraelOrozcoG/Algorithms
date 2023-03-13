let perfectNumbers=(num)=>{

    let addNumber=0;
    for(let i = 1; i < num; i++) {

        num % i == 0 ? addNumber+=i:addNumber+=0;
    }
    return num==addNumber?`Perfect`
        :num>addNumber?`Abundant`
        :`Deficient`;
}

let n1=28,n2=36,n3=7;
console.log(perfectNumbers(n1));
console.log(perfectNumbers(n2));
console.log(perfectNumbers(n3));