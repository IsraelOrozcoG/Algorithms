/**Code by --Robin Andrews modifications by Israel Orozco */
function pasc(n){
    let result = [];
        result[0] = [1];
        result[1] = [1,1];
        let pascal="";
        if(n==0){return pascal+=result[n];}
        if(n==1){return `${pascal+=result[0]}\n${pascal+=result[0]}`;}
        else{
            pascal=`${pascal+=result[0]}\n${pascal+=result[0]}\n`
    for (let row = 2; row < n; row++){
        result[row] = [1];
            pascal+=`${result[row]},`
        for (let col = 1; col <= row -1; col++){
            result[row][col] = result[row-1][col] + result[row-1][col-1];
            result[row].push(1);
            pascal+=`${result[row][col]},`
        }
            pascal+=`1 \n`
    }}
    return pascal;
    }

let number=1;

console.log(pasc(number));
