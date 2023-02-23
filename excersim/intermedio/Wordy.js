let wordy =(text) =>{

    let pattern = /(plus|minus|multiplied|divided|[0-9])/g;
    let justOneNumber =/[0-9]{1}$/g;
    let add =/(plus)/g;
    let less =/(minus)/g;
    let multiply =/(multiplied)/g;
    let divide =/(divided)/g;
    let result = text.match(pattern);
    let number=0;
    let operation="";
    //operation=result.forEach(function(item, i) { if (item == "plus") result[i] ="plus" ;});
    //console.log(operation);

    if(text.match(pattern)){
        if(text.match(add)=="plus"){
            return console.log(`Here you have to add numbers`)
        }
        if(text.match(less)=="minus"){
            return console.log(`Here you have to "minus" numbers`)
        }
        if(text.match(multiply)=="multiplied"){
            return console.log(`Here you have to multiply numbers`)
        }
        if(text.match(divide)=="divided"){
            return console.log(`Here you have to divide numbers`)
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
let phrase3 ="What is 8 minus 1";
let phrase4 ="What is 1 multiplied by 8";
let phrase5 ="What is 8 divided by 1";
wordy(phrase);
wordy(phrase1);
wordy(phrase2);
wordy(phrase3);
wordy(phrase4);
wordy(phrase5);

