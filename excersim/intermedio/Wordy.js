let wordy =(text) =>{

    let pattern = /(plus|minus|multiplied|divided|[0-9])/g;
    let justOneNumber =/([0-9])/g;
    let result = text.match(pattern);
    let number=0;
    let addition=0;
    console.log(result);
    if(text.match(justOneNumber)){
        return `${text}->Is just ${text.match(justOneNumber)}`
    }

        

        

        console.log(addition);
    }


let phrase1 ="What is 5";
let phrase ="What is 4 plus 4";
let phrase2 ="What is the meaning of these";

console.log(wordy(phrase));
console.log(wordy(phrase1));
console.log(wordy(phrase2));