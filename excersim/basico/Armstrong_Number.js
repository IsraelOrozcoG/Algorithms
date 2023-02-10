let armstrongNumber = (number) =>{
    let splitNumber="",representNumber="";
    let armstrong=0;
    let i=0;
        splitNumber=number.toString();
        do{
            representNumber+=splitNumber.charAt(i)+"^"+splitNumber.length;
            armstrong+=splitNumber.charAt(i)**splitNumber.length;
            i++;
            if(i!=splitNumber.length){
                representNumber+="+"
            }else{
                representNumber+="=>"
            }
        }while(splitNumber.length!=i)
        if(number==armstrong){
            return "The number "+number+"="+representNumber+" "+armstrong+" is Armstrong";
        }
        return "The number "+number+"="+representNumber+" "+armstrong+" is not Armstrong";
    
}
let myNumber=153,myNumber1=9,myNumber2=1,myNumber3=190;
console.log(armstrongNumber(myNumber));
console.log(armstrongNumber(myNumber1));
console.log(armstrongNumber(myNumber2));
console.log(armstrongNumber(myNumber3));