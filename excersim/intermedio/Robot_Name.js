let robotName =()=>{
    let robot="";
    
        for(let i=0;i<2;i++){
        robot+=String.fromCharCode(64 + Math.floor((Math.random() * 26)+1));
        }
        
        for(let i=0;i<3;i++){
            robot+= Math.floor(Math.random() * (9 - 0 + 1) + 0);
            }
            return robot;
}

let robots=[];
robots.push(robotName());
console.log(robots);
robots.push(robotName());
console.log(robots);
robots.push(robotName());
console.log(robots);
robots.push(robotName());
console.log(robots);
robots.push(robotName());
console.log(robots);
robots.push("WX123");
robots.push("AB123");
console.log(robots);
/**Change data without confirmation */
robots.forEach(function(item, i) { if (item == "AB123") robots[i] ="" ; });
console.log(robots);
/**Change data without confirmation */
robots.forEach(function(item, i) { if (item == "") robots[i] =robotName() ; });
console.log(robots);

