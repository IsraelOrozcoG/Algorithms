let phoneNumber =(str) =>{
let number = str.replace(/[^\d]/g, '');

if((parseInt(number.charAt(0))==1 && number.length==11 &&
    (parseInt(number.charAt(1))>=2 && parseInt(number.charAt(4))>= 2)) 
    ||number.length==10&&
    (parseInt(number.charAt(0))>=2 && parseInt(number.charAt(3))>= 2)){
        if(number.length==11){
            return number = number.substring(1);
        }
    return number;
}else{
    return "Not valid :"+number; 
}
    
}
let n1 = '+1 (613)-995-0253';
let n2 = '613-995-0253';
let n3 = '1 613 995 0253';
let n4 = '613.995.0253'
console.log(phoneNumber(n1));
console.log(phoneNumber(n2));
console.log(phoneNumber(n3));
console.log(phoneNumber(n4));