let wordCount = (text) =>{
    let i=0;
    word ="";
    words=[];
    do{
        word+=text.charAt(i);
        if(text.charAt(i)==" "){
            word=word.toLowerCase().replace(/\s/g, "");
            words.push(word);
            word="";
        }
        i++;
    }while(i<text.length)
    for(let j=0;j<words.length;j++){
        for(let k=0;k<words.length;k++){
            
        }
    }
    console.log(words);
    return text;
}

let myText ="This is a great text this can be cool";

console.log(wordCount(myText));