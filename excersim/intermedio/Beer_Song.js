let beerSong = () => {
    let bottles = 99;
    let song = ``;
    while(bottles != 0){
        if(bottles-1>1){
        song += `${bottles} bottles of beer on the wall, ${bottles} bottles of beer. 
                Take one down and pass it around, ${bottles-1} bottles of beer on the wall.\n`
        }
        if(bottles-1 == 1){
        song +=` 1 bottle of beer on the wall, 1 bottle of beer.
                Take it down and pass it around, no more bottles of beer on the wall.\n`
        }

        if(bottles-1 == 0){
        song +=`No more bottles of beer on the wall, no more bottles of beer. 
            Go to the store and buy some more, 99 bottles of beer on the wall.\n`
        }

        bottles --;
    }

    console.log(song);
}

beerSong();
