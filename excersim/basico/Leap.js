function Leap(year){
    if((year%4==0)&&(year%100!=0||year%400==0)){
        return "The year"+year+" is leap";    
    }
        return "The  year"+year+" is not leap";
    }

    let y1=1904,y2=1908,y3=1961,y4=400;

    console.log(Leap(y1));
    console.log(Leap(y2));
    console.log(Leap(y3));
    console.log(Leap(y4));