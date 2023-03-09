let wordCount = (text) =>{
    let i=0;
    word ="";
    words=[];
    count =0;
    do{
        word+=text.charAt(i);
        if(text.charAt(i)=="."){
            word=word.replace(/\./g," ");
        }
        if(text.charAt(i)==" "||i==text.length-1){
            word=word.toLowerCase().replace(/\s|\!|\:|\'|\"/g, "");
            
            words.push(word);
            word="";
        }
        i++;
    }while(i<text.length)
    let elementCount=words;
    console.log(elementCount);
    for (let i = 0; i < words.length; i++) {
        let element = words[i];
        if (elementCount[element]) {
         elementCount[element] += 1;
        } else {
         elementCount[element] = 1;
        }
       }

    //console.log(elementCount)
    //console.log(words);
    return elementCount;
}

let myText =`That's the password: 'PASSWORD 123'!", cried the Special Agent.So I fled.`;

console.log(wordCount(myText));