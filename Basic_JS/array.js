// Array
/**
 * data Structure 
 * data store 
 * ES6 Ecma Script 6 return heterogenous values
 * 
 * 
 *     How to create an array
 *        let,var name_array =[];
 *         let,var name_array=new Array(length_array);
 *       let number_array =[1,2,3,4,5,6];
 *        to access the array values Index 0,...n-1
 *              number_array[0] // 1 
 */

let number_array =[1,2,3,4,5,6];
console.log(number_array[0]);

// for of loop for in 

for(const key in number_array) { console.log(key)}// index value of array 0,1,2,3,4,5 0,..n-1
for(const key of number_array){console.log(key)} // array value 

// bulging methods 
/**
 * push(data) value add at the last of array
 * unshift(data) value add at the beginig of array
 * 
 * pop() last value remove
 * shift() first value remove
 * 
 * map(function )
 */

console.log(number_array.push('Abel'));
console.log(number_array);
console.log(number_array.unshift('yassin'));
console.log(number_array);

console.log(number_array.pop());
console.log(number_array);

console.log(number_array.shift());
console.log(number_array);

const newArray= number_array.map(vlaue=>vlaue*2);
console.log(newArray)

