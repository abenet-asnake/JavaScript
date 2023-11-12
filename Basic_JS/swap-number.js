var number=56;// 765
var swappedNumber=0;

while (number>0){
    var lastDigit=number%10;// 76
    swappedNumber=swappedNumber*10+lastDigit;//7
    number=parseInt (number/10);//56
}

console.log(swappedNumber);
