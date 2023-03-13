let  leap=(year)=>{

    return (year%4==0)&&(year%100!=0||year%400==0)?`The year ${year} is leap`
            :`The  year ${year} is not leap`;
    }

    let y1=1904,y2=1908,y3=1961,y4=400;

    console.log(leap(y1));
    console.log(leap(y2));
    console.log(leap(y3));
    console.log(leap(y4));