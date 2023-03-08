let sieve = (initial, final) => {
    let myNumbers = [];
    let one = [];
    let myPrimes = [];
    let n = 0;
    for (let i = initial; final >= i; i++) {
      myNumbers.push(i);
    }
  
    for (let i = 2; i < final; i++) {
      n = i;
      for (let j = 0; j < final - 1; j++) {
        if (myNumbers[j] == n) {
          one.push(myNumbers[j]);
          n += i;
        }
      }
    }
    one = one.sort(function (a, b) {
      return a - b;
    });
    myPrimes = one.filter(
      (value) => one.indexOf(value) == one.lastIndexOf(value)
    );
    return myPrimes;
  };
let nthPrime =(number) =>{
    number=number-1;
    myNumbers=sieve(2,1000);
    if(myNumbers.length<number|| number<0){
        return `Not possible please change the range of the function sieve or check the nth variable it must be 1-100`;
    }
    return myNumbers[number];
}

let nth =100;
console.log(`The ${nth} position number prime is ${nthPrime(nth)}`)