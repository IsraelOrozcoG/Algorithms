let wordy =(text) =>{

    let pattern = /(plus|minus|multiplied|divided|[0-9])/g;
    let justOneNumber =/[0-9]{1}$/g;
    let add =/(plus)/g;
    let result = text.match(pattern);
    let number=0;
    let operation="";
    //operation=result.forEach(function(item, i) { if (item == "plus") result[i] ="plus" ;});
    //console.log(operation);

    if(text.match(pattern)){

        
        if(text.match(add)=="plus"){
            return console.log(`Here you have to add numbers`)
        }
        if(text.match(justOneNumber)){
            return console.log(`${text}->Is just ${text.match(justOneNumber)}`);
            }
    }else{
        return console.log(`${text}->Non Math Question`);
    }
     
    }


let phrase ="What is 5";
let phrase1 ="What is the meaning of these";
let phrase2 ="What is 1 plus 8";
wordy(phrase);
wordy(phrase1);
wordy(phrase2);
