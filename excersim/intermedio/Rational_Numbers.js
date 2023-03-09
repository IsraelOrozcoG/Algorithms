let rationalNumbers=(numerator1,denominator1,numerator2,denominator2)=>{

    let resultNumerator=numerator1 * denominator2 + numerator2 * denominator1;
    let resultDenominator=denominator1 * denominator2;
    let addition=`${resultNumerator}/${resultDenominator}`;

    resultNumerator=numerator1 * denominator2 - numerator2 * denominator1;
    resultDenominator=denominator1 * denominator2;
    let subtraction=`${resultNumerator}/${resultDenominator}`;

    resultNumerator=numerator1*numerator2;
    resultDenominator=denominator1*denominator2;
    let multiplication =`${resultNumerator}/${resultDenominator}`;

    resultNumerator=numerator1*denominator2;
    resultDenominator=numerator2*denominator1;
    let divition=`${resultNumerator}/${resultDenominator}`;

    resultNumerator=(numerator1**2);
    resultDenominator=(denominator1**2);
    let exponentiation=`${resultNumerator}/${resultDenominator}`;
    resultNumerator=(numerator2**2);
    resultDenominator=(denominator2**2);
    exponentiation+=` ${resultNumerator}/${resultDenominator}`;

    resultNumerator=(denominator1**2);
    resultDenominator=(numerator1**2);
    let exponentiationNegative=`${resultNumerator}/${resultDenominator}`;
    resultNumerator=(denominator2**2);
    resultDenominator=(numerator2**2);
    exponentiationNegative+=` ${resultNumerator}/${resultDenominator}`;
    resultNumerator=(numerator1**2.5);
    resultDenominator=(denominator1**2.5);

    let exponentiationRational =`${resultNumerator}/${resultDenominator}`;
    resultNumerator=(numerator1**2.5);
    resultDenominator=(denominator1**2.5);
    exponentiationRational +=` ${resultNumerator}/${resultDenominator}`;

    let realToRational=Math.sqrt(Math.pow(2,numerator1), denominator1);

    return `The operations of ${numerator1}/${denominator1} , ${numerator2}/${denominator2}
            Addition=${addition}
            Subtraction=${subtraction}
            Multiplication=${multiplication}
            Divition=${divition}
            Exponentiation=${exponentiation}
            Exponentiation Negative=${exponentiationNegative}
            Exponentiation Rational=${exponentiationRational}
            Real to Rational=${realToRational}`;
}
let n1=10,d1=8,n2=30,d2=24;

console.log(rationalNumbers(n1,d1,n2,d2))