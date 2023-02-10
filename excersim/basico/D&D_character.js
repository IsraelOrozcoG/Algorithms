let attribute = () => {

    let throws=[];
    let total=0,leastValue=0,modifier=0,characterAttributes="";
    for(let n=1;n<=6;n++){
    for(let i=0;i<=3;i++){

        throws[i]=Math.round(Math.random() * (6 - 1) + 1);
    }
        throws.sort((a,b)=>b-a);
        leastValue=throws.pop();

        for (let j = 0; j < throws.length; j++) {
            total+= throws[j];  
        }
         modifier=(Math.floor((total-10)/2));
   
   characterAttributes+= "Attribute throws ["+n+"]  => "+throws+","+leastValue+" Total: "+total+" Modifier:"+modifier+"\n";
   total=0;
}
    return characterAttributes;
}
console.log(attribute());
