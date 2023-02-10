let attribute = () => {

    let characteristic=[];
    let total=0,leastValue=0,modifier=0,characterAttributes="";
    for(let n=1;n<=6;n++){
    for(let i=0;i<=3;i++){

        characteristic[i]=Math.round(Math.random() * (6 - 1) + 1);
    }
        characteristic.sort((a,b)=>b-a);
        leastValue=characteristic.pop();

        for (let j = 0; j < characteristic.length; j++) {
            total+= characteristic[j];  
        }
         modifier=(Math.floor((total-10)/2));
   
   characterAttributes+= "Attribute throws ["+n+"]  => "+characteristic+","+leastValue+" Total: "+total+" Modifier:"+modifier+"\n";
   total=0;
}
    return characterAttributes;
}
console.log(attribute());
