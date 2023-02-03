function resistorColor(color1,color2){
    let value;
    switch (color1) {
        case "Black":
            
            break;
        case "Brown":
            color1=1;
            break;
        case "Red":
            color1=2;
            break;
        case "Orange":
            color1=3;
            break;
        case "Yellow":
            color1=4;
            break;
        case "Green":
            color1=5;
            break; 
        case "Blue":
            color1=6;
            break;
        case "Violet":
            color1=7;
            break; 
        case "Grey":
            color1=8;
            break; 
        case "White":
            color1=9;
            break;    
        default:
            break;
    }
    switch (color2) {
        case "Black":   
            break;
        case "Brown":
            color2=1;
            break;
        case "Red":
            color2=2;
            break;
        case "Orange":
            color2=3;
            break;
        case "Yellow":
            color2=4;
            break;
        case "Green":
            color2=5;
            break; 
        case "Blue":
            color2=6;
            break;
        case "Violet":
            color2=7;
            break; 
        case "Grey":
            color2=8;
            break; 
        case "White":
            color2=9;
            break;    
        default:
            color2="error"
            break;
    }
    return color1+""+color2;
}

let value1="Red", value2="White";

console.log("The code "+ value1+" ,"+value2+" is "+resistorColor(value1,value2));