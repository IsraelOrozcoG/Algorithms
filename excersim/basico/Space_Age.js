const mercury=0.2408467;
const venus=0.61519726;
const earth=1.0;
const mars=1.8808158;
const jupiter=11.862615;
const saturn=29.447498;
const uranus=84.016846;
const neptune=164.79123;

let spaceAge=(seconds)=>{
    let planet=0;
    let equivalent="",years=0;
    years=seconds/60/60/24/365.25;
    planet=years/mercury;
    equivalent+=planet+" Mercury \n";
    planet=years/venus;
    equivalent+=planet+" Venus \n";
    planet=years/earth;
    equivalent+=planet+" Earth \n";
    planet=years/mars;
    equivalent+=planet+" Mars \n";
    planet=years/jupiter;
    equivalent+=planet+" Jupiter \n";
    planet=years/saturn;
    equivalent+=planet+" Saturn \n";
    planet=years/uranus;
    equivalent+=planet+" Uranus \n";
    planet=years/neptune;
    equivalent+=planet+" Neptune \n";
    return equivalent;
}

let ageInSeconds=1000000000;

console.log(spaceAge(ageInSeconds));