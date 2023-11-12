//============================== If only ==============================================================
var checkIf=23;
if(checkIf>0) console.log("The Number is Greater than Zero");
//============================= If Else and ternary operator====================================================

var checkEvenOdd=20;
if (checkEvenOdd%2==0){
    console.log("It is Even Number");
}
else{
    console.log("It is Odd Number");
}
  


var ternaryOperator=(checkEvenOdd%2==0)? 'Even Number':'Odd Number';

//============================================Nested If Else Conditional Expression=============================
var num=10;
if(num==0){
    console.log("This Number is zero");
}
else if(num>0){
    console.log("the number is positive");
}

else{
    console.log("The number is negative");
}

switch(true){
    case num==0:
        console.log("This Zero");
        break;
    case num>0:
        console.log(" Positive");
        break;
    default:
        console.log("negative")

}

// ========================= Example About Grade =========================================
// Function to get the grade based on the score
     var grade=90;
    if (grade >= 95 && grade <= 100) {
        console.log('A+') ;
    } else if (grade >= 85 || grade < 95) {
        console.log( 'A');
    } else if (grade >= 76 && grade < 85) {
       console.log('A-') ;
    } else {
        console.log('Not Graded') ;
    }


switch(grade>0) // you can use true insted of grade >0
{
    case grade  >= 95 && grade<= 100:
            console.log('A+') ;
            break;
        case grade >= 85 && grade < 95:
            console.log( 'A');
            break;
        case grade >= 76 && grade < 85:
            console.log('A-') ;
            break;
        default:
            console.log('Not Graded') ;
}
