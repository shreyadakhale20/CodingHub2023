//LET
//VAR
//CONST

// Before the introduction of concept of ES6 in Javascript declaration of a variable was done using var but nowdays var keyword is not use because it can cause bugs due to other reasons
// var keyword is used to declare a keyword globally
// var keyword can be redeclared but let keyword cannot be redeclared because of which bugs can occur during the use of var keyword

//Use of const is used to declare constants, it is used with the identifiers whose values cannot be changed throughout the code 
//let keyword is used for blocked scoped keyword

// Examples of identifiers: counter, totalAmount, calculateTotal, Employee, myFunction.
//Examples of keywords in JavaScript: if, else, while, for, function, class, return.

console.log("--var--")
var a = 23 //Global declaration
{
    a = "Shreya"
    console.log(a)
}
console.log(a + "\n")

console.log("--let--")
let b = 43  //local declaration
{
    let b = "Shreya"
    console.log(b)
}
console.log(b)


let c = 34  //declaration of variable using let keyword
c = "ER"    //let keyword can be updated
//let c = 4 // let keyword cannot be re-declared

var e = 65  //declaration of variable using var keyword
e = "shreya"//var keyword can be updated
var e = 'y' //var keyword can be re-declared

const author = "Shreya" //declaration of variable using const keyword
//author = "Shivani"      //const keyword cannot be updated
//let author = "Rashta"   //const keyword cannot be re-declared
// let author = "Bhargav"  //Identifier 'author' has already been declared

var number;     //var and let keywords are not needed to be initialized
let number1;    //var and let keywords are not needed to be initialized
const number2 = 43  //const keyword must be initialized

// CONCLUSION 
//--> avoid use of var but can be used before ES6 code
//--> try to use const keyword more where you know that the value will not change throughout the code
//--> try to use let keyword in place of var keyword
