let wordy =(text) =>{

    let pattern = /(plus|minus|multiplied|divided|[0-9])/g;
    let justOneNumber =/[0-9]{1}$/g;
    let add =/(plus)/g;
    let less =/(minus)/g;
    let multiply =/(multiplied)/g;
    let divide =/(divided)/g;
    let result = text.match(pattern);
    let n1=0;
    let n2=0;
    let total=0;

    let array=[];
    array=text.match(pattern);
    //console.log(`Arreglo ${array} `);

    


    if(text.match(pattern)){
        n1=parseInt(n1=array[0]);
        n2=parseInt(n2=array[2]);
        
        

        if(text.match(add)=="plus"){
            total=n1+n2;
            return console.log(`${text}->${n1}+${n2} =${total}`)
        }
        if(text.match(less)=="minus"){
            total=n1-n2;
            return console.log(`${text}->${n1}-${n2} =${total}`)
        }
        if(text.match(multiply)=="multiplied"){
            total=n1*n2;
            return console.log(`${text}->${n1}*${n2} =${total}`)
        }
        if(text.match(divide)=="divided"){
            total=n1/n2;
            return console.log(`${text}->${n1}/${n2} =${total}`)
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
let phrase2 ="What is 9 plus 8";
let phrase3 ="What is 9 minus 9";
let phrase4 ="What is 8 multiplied by 8";
let phrase5 ="What is 8 divided by 3";
wordy(phrase);
wordy(phrase1);
wordy(phrase2);
wordy(phrase3);
wordy(phrase4);
wordy(phrase5);

