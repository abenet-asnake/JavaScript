// // My first  Hello World JavaScript
// //console.log("Hello world!");

// // var let const 
// // { ...} 
// // var 


// // function loops() {
// //     for (let i = 0; i < 5;i++) 
// // //     {
// // //          console.log(i);// 01234
// // //     }
// // //     console.log("");
// // //     //console.log(i);// 5 i is not defined let blocked in for loop 
// // // }
// // //  loops();

// // let x=5;// variable declaration  Datatype vriable_name/identifiers =(assign ) value 
// // console.log(x);
// // x=10;// 
// // console.log(x);


// // // let x=100;
// // // console.log(x)

// // const pi=3.14;
// // console.log(pi)
// // // pi=1.14;
// // // console.log(pi)//Assignment to constant variable. error message

// // // var names=20;
// // // console.log(get);

// // // arth
// // //+ - * / % 


// // var firstNumber;
// // var secondNumber;
// // firstNumber =10;
// // secondNumber =10;

// // console.log(firstNumber%secondNumber);
 
// // // variable 
// // var num1=5;// five 5 in number      5=='5' true  value  data Type string === number  false 
// // var num2='5';// 5 five  string 
// // console.log(typeof(num1));
// // console.log(typeof(num2));
// // // == === != !== 
// // console.log(num1==num2);// true
// // console.log(num1!==num2);// false 5!=='5 = 5
// // console.log(num1)
// // console.log(num2)

// // if  
var number =50; // odd
// if (number>0){
//     console.log("I am Gretaer than zero!"); // true 
// }

// //if else 

// // even odd   
// if (number%2==0){
//     console.log(number+": is even!"); //5::The Number is even!
// }
// else{
//     console.log(number+": is odd!"); //5:The Number is odd!
// }

// // condition? true :
// // var ternaryOPP=(number%2==0)? 'Even':'odd'; // singler line  condition ? True:False
// // console.log(ternaryOPP);
// if (number==0){
//     console.log("the number is zero!");
// }

// else if (number>0){
//     console.log("the number is positive!");
// }

// else {
//     console.log("The Number is negative!");
// }
var num=10;
// // switch(conditon ){case: break;case:  ... default:}
switch(num){
    case num=0:// 50==0 false jump
        console.log("the number is zero");
        break;
    case num>0: //50 >0 true  
        console.log("the number is positive!");
        break;
    default:
        console.log("The Number is negative!");
       
}

// Loop 
// for , while do while 

// initialize condition update(increment) time 
var value =5;// 0+1+2+3+4+5
var sum=0;
for(var i = 0; i <=value.length; i++) {
      sum=sum+i;//
      //console.log(sum);
    //1 1+1=2 2+1=3 
}
console.log("total Sum is: "+sum);

// while loop 
var i=0;
while(i>=value){
   sum=sum+i;
   i++;
}
console.log("total Sum of while loop is: "+sum);

do{
  sum=sum+i;
  i++;

}while(i<=value);
console.log("total Sum of Do while loop is: "+sum);

