const days={
    1:"first",
    2:"second",
    3: "third",
    4:"fourth",
    5:"fifth",
    6:"sixth",
    7:"seventh",
    8:"eighth",
    9:"ninth",
    10:"tenth",
    11:"eleventh",
    12:"twelfth"
}
const present={
    1:"a Partridge in a Pear Tree",
    2: " two Turtle Doves,",
    3: " three French Hens,",
    4: " four Calling Birds,",
    5: " five Gold Rings,",
    6: " six Geese-a-Laying,",
    7: " seven Swans-a-Swimming,",
    8: " eight Maids-a-Milking,",
    9: " nine Ladies Dancing,",
    10: " ten Lords-a-Leaping,",
    11: " eleven Pipers Piping,",
    12: " twelve Drummers Drumming,"
}

let twelveDays = (day) =>{
    let presents="";
    let lyrics="";
    j=1;
    if(isNaN(day) ||(day<1 || day>12)){
        return "Not possible check the input";
    }
    for(let i=1;i<=day;i++){
        presents = presents.replace(/^/, `${present[i]}`);
        lyrics+=`\n On the ${days[j]} Christmas my true love gave to me: ${presents} \n`;
        j++;
    }
    return lyrics;
}

let day =12;
console.log(twelveDays(day));