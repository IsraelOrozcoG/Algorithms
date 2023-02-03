function twoFers(name){

    if(name==null || name==""){
        
        return name="One for you, one for me.";
    }

    return "One for"+name+", one for me";

}

let nameP="Texcatlipoca";
let nameN;

console.log(twoFers(nameP));
console.log(twoFers(nameN));