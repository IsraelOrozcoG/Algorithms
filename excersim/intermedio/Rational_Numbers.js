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
    return `The operations of ${numerator1}/${denominator1} , ${numerator2}/${denominator2}
            Addition=${addition}
            Subtraction=${subtraction}
            Multiplication=${multiplication}`;
}
let n1=10,d1=8,n2=30,d2=24;

console.log(rationalNumbers(n1,d1,n2,d2))