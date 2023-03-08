const numbers =[`
 _
| |
|_|`,   
`

|
|`,
`
 _
 _|
|_ `,
    `
 _
 _|
 _|`,
    `

|_|
  |`,
    `
 _
|_
 _|`,
    `
 _
|_
|_|`,
    `
 _
 _|
  |`,
   `
 _ 
|_|
|_|`,
  `
 _
|_|
 _|` 
];
let acumulated ="";

for(let i=0;i<10;i++){
  acumulated+= numbers[i];
  acumulated=acumulated.trimEnd();
}


console.log(acumulated);

