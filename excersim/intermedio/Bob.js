let bob =(text) =>{
      let loudQuestion=/[A-Z" "]+\?{1}$/
      let simpleQuestion=/[A-Za-z" "]+\?{1}$/
      let yell=/[A-Z" "]+$/
      return loudQuestion.test(text) ? `${text} -> Calm down, I know what I'm doing!`
            : simpleQuestion.test(text) ? `${text} -> Sure`
            : yell.test(text) ? `${text} -> Whoa, chill out!`
            : text=="" ? `"${text}" -> Fine. Be that way`
            : `${text} -> Whatever.`;
}

let phrase="IS THAT AMAZING?";
let phrase1="Is that amazing?";
let phrase2="THIS IS AMAZING";
let phrase3="";
let phrase4= "You blah blah blah";
console.log(bob(phrase));
console.log(bob(phrase1));
console.log(bob(phrase2));
console.log(bob(phrase3));
console.log(bob(phrase4));

