let bob =(text) =>{

      return text.charAt(text.length-1)== "?" ? "Sure"
            : text.length==0 ? "Whoa, chill out!"
            : text.length==1 ? "Calm down, I know what I'm doing!"
            : text.length==2 ? "Fine. Be that way"
            : "Whatever.";
}

let phrase="IS THAT AMAZING?";
let phrase1="";
let phrase2="1";
let phrase3="12";
let phrase4= "You blah blah blah";
console.log(bob(phrase));
console.log(bob(phrase1));
console.log(bob(phrase2));
console.log(bob(phrase3));
console.log(bob(phrase4));

