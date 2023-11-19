// Named Function 
// Anonymous function

// named function   
/**
 *  function the_name_function(no parameters, parameters){....}
 */

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
console.log(add(5,9)) ;

function sayHello(name){
console.log(`Hello ${name} ! `);
}
sayHello('Abdulefeta');

// with out Name 
/**
 * 
 * variable 
 * var/let/const variable_name= function (no parameters,parameters){....}
 * this called Anonymous function 
 */

const multiplyNumber = function (firstNumber, secondNumber){
    return firstNumber * secondNumber
}

console.log(multiplyNumber(4,5));

// Arrow Function 
function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
console.log(add(5,9)) ;

/**
 * Arrow Function 
 * variable_name = (no arguments,arguments)=>{...}
 */
var add =(firstNumber,secondNumber)=> firstNumber+secondNumber;
var square=number=> { return number*number};
console.log(square(4));
console.log(add(10,789));

// High Ordered Function 
/**
 * a Function takes a function  parameter= function 
 * function (function)
 * map(function),
 * reduce 
 * filter(function)
 * groups names [ ]
 */

let number_array =[1,2,3,4,5,6];

let evenNumbers=number_array.filter( num=>num%2==0);
console.log(evenNumbers);

let studentList=['Abdule', 'Abel','Aklil','Amare','bilal','fasil','mequnnet','mintesnot','nestenaet','yassin'];

let alaphaelA=studentList.filter(function(firstLetter){
    if(firstLetter[0]=='A')
    {
        return true;
    }
    return
})

let arrowFunctions=studentList.filter(firstLetter=>firstLetter[0]=='A');

console.log(alaphaelA);
console.log(arrowFunctions);


// old 
let filteredStudentList=[];
for(let i=0; i<studentList.length; i++){
    if(studentList[i][0]=='A'){
        filteredStudentList.push(studentList[i]);
    }
}
console.log(filteredStudentList);


/**
 * recursive function 
 * a function that calls themselves 
 * Factorial fibonacci numbers,reverse string (love=evol),LCM,GCF,...
 */

function factorial(number){
    if(number===0) return 1;
    return(number*factorial(number-1));
    
}
console.log(factorial(7));