let gcdOfTwo=(x, y)=> {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
let rationalNumbers=(numerator1,denominator1,numerator2,denominator2)=>{
    let i=2;
    let gcd=0;
    

    let resultNumerator=numerator1 * denominator2 + numerator2 * denominator1;
    let resultDenominator=denominator1 * denominator2;
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    
    let addition=`${resultNumerator/gcd}/${resultDenominator/gcd}`;

    resultNumerator=numerator1 * denominator2 - numerator2 * denominator1;
    resultDenominator=denominator1 * denominator2;
    let subtraction=`${resultNumerator/gcd}/${resultDenominator/gcd}`;

    resultNumerator=numerator1*numerator2;
    resultDenominator=denominator1*denominator2;
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    let multiplication =`${resultNumerator/gcd}/${resultDenominator/gcd}`;

    resultNumerator=numerator1*denominator2;
    resultDenominator=numerator2*denominator1;
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    let divition=`${resultNumerator/gcd}/${resultDenominator/gcd}`;

    resultNumerator=(numerator1**2);
    resultDenominator=(denominator1**2);
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    let exponentiation=`${resultNumerator/gcd}/${resultDenominator/gcd}`;
    resultNumerator=(numerator2**2);
    resultDenominator=(denominator2**2);
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    exponentiation+=` ${resultNumerator/gcd}/${resultDenominator/gcd}`;

    resultNumerator=(denominator1**2);
    resultDenominator=(numerator1**2);
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    let exponentiationNegative=`${resultNumerator/gcd}/${resultDenominator/gcd}`;
    resultNumerator=(denominator2**2);
    resultDenominator=(numerator2**2);
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    exponentiationNegative+=` ${resultNumerator/gcd}/${resultDenominator/gcd}`;

    resultNumerator=(numerator1**2.5);
    resultDenominator=(denominator1**2.5);
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    let exponentiationRational =`${resultNumerator/gcd}/${resultDenominator/gcd}`;
    resultNumerator=(numerator1**2.5);
    resultDenominator=(denominator1**2.5);
    gcd=gcdOfTwo(resultNumerator,resultDenominator);
    exponentiationRational +=` ${resultNumerator/gcd}/${resultDenominator/gcd}`;

    let realToRational=Math.sqrt(Math.pow(2,numerator1), denominator1);

    return `The operations of ${numerator1}/${denominator1} , ${numerator2}/${denominator2}
            Addition=${addition};
            Subtraction=${subtraction}
            Multiplication=${multiplication}
            Divition=${divition}
            Exponentiation=${exponentiation}
            Exponentiation Negative=${exponentiationNegative}
            Exponentiation Rational=${exponentiationRational}
            Real to Rational=${realToRational}`;
            

            
        }
let n1=120,d1=80,n2=30,d2=24;

console.log(rationalNumbers(n1,d1,n2,d2))