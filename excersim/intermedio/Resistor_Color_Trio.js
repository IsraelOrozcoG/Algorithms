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
    console.log(`${c1} ${c2} ${c3}`);
} 

let firstColor =`red`;
let secondColor = `black`;
let thirdColor = `orange`;

resistorColorTrio (firstColor,secondColor,thirdColor);