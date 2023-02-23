let wordy =(text) =>{

    let pattern = /(plus|minus|multiplied|divided|[0-9])/g;
    let justOneNumber =/([0-9])/g;
    let result = text.match(pattern);
    let number=0;
    let reg=0;
    
    
    if(text.match(pattern)){
        if(text.match(justOneNumber)){
        return console.log(`${text}->Is just ${text.match(justOneNumber)}`);
        }
        if(text.match(pattern=="plus")){
            return console.log(`Here you have to add numbers`)
        }
    }else{
        return console.log(`Non Math Question`);
    }
     
    }


let phrase ="What is 5";

let phrase1 ="What is the meaning of these";

wordy(phrase);
wordy(phrase1);
