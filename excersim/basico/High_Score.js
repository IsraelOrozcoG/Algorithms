function highscore(){
    let score=[];
    score=[1000,20550,9999,650,10,65,600];
    let noSortScore=score;
    console.log(noSortScore);
    score.sort(function(a, b){return b - a});

    return console.log("The highest score: "+score[0]+
                        "\nThe first, second and third score "+score[0]+", "+score[1]+", "+score[2]+
                        "\nThe last score added "+noSortScore[6]);

}
console.log(highscore());