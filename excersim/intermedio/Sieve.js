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
let start = 2,
  end = 500;
console.log(sieve(start, end));
