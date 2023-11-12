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
 * filter(function)
 * groups names [ ]
 */

