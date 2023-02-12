let candidates=["stone","tones","banana","notes","seton","abanana"];
const anagram=(word)=>{
    let words="",anagramWords="";
    let count=0;
    let countWord=word.length;
    for(let k=0;k<=countWord;k++){
    words=candidates[k];
        if(words==word){
            k++;
            words=candidates[k];
        }
        if(countWord==words.length){
            for(let i=0;i<words.length;i++){
                for(let j=0;j<=words.length+1;j++){
                if(word.charAt(i)==words.charAt(j)){
                    count++;
                }
                    
            }
        }
        }
            if(words.length==count){
                anagramWords+=words+", ";
            }
            count=0;
        }
    return word+"->"+anagramWords +"But it misses the last ->"+words;
}
let target="stone";
console.log(anagram(target));