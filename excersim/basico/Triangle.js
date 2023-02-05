function triangle(side1,side2,side3){
    if((side1<=0||side2<=0||side3<=0)&&(side1+side2<=side3||(side2+side3<=side1)||(side1+side3<=side2))){
        return "Not a triangle";
    }
    if((side1==side2)&&(side2==side3)){
        return "Triangle equilateral"
    }
    if(((side1==side2)&&(side3!=side1)&&(side3!=side2))||((side1==side3)&&(side2!=side1)&&(side2!=side3))
    ||((side2==side3)&&(side1!=side2)&&(side1!=side3)))
    {
        return "Triangle Isosceles"
    }
    if(side1!=side2 && side2!=side3){
        return "Triangle Scalene"
    }
    return "What da fuck"
}

let s1=1,s2=1,s3=1;
let s4=2,s5=2,s6=4;
let s7=3,s8=4,s9=5;

console.log(triangle(s1,s2,s3));
console.log(triangle(s4,s5,s6));
console.log(triangle(s7,s8,s9));