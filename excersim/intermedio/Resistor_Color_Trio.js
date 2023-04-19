const RESISTOR_COLOR_VALUE = {    
    black:0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}

let resistorColorTrio = (c1,c2,c3) =>{
    let firstValue = 0, secondValue =0, thirdValue = 0;
    let zeros = ``;
    firstValue = RESISTOR_COLOR_VALUE[c1];
    secondValue = RESISTOR_COLOR_VALUE[c2];
    thirdValue = RESISTOR_COLOR_VALUE[c3];
    
    for(let i = 0; i< thirdValue ;i++){
        zeros += `0`;
    }

    console.log(`${firstValue}${secondValue}${zeros} ohms`);
} 

let firstColor =`red`;
let secondColor = `violet`;
let thirdColor = `orange`;

resistorColorTrio (firstColor,secondColor,thirdColor);