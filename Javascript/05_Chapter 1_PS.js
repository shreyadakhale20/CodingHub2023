//Chapter 1 - Q1
// Create a variable of type string and try to add a number to item

//Solution
let s = "Shreya"
let number = 43
let sum = s + number
console.log(sum)   

//Explanation 
// The string and number after performing addition will be concatenated

// -------------------------------------------------------------------------

//Q2
// Use typeof operator to find the datatype of the string in last question

//Solution
console.log(typeof s)

//Explanation
//Data type of s in last question is string

//-------------------------------------------------------------------------

//Q3
//Create a const object in Javascript, can you change it to hold a number later

// Solution
const list = {
    "s":"Sam"
}
// list is reference to this Object
console.log(list["s"])
//list = 43     Assignment to constant variable.   

//Explanation
//No, the object list having a key s to which a string is assigned to it, another value or another data type cannot be replaced 
//or added to s because the datatype of object list is const

// -------------------------------------------------------------------------

//Q4 Try to add a new key to the const object in Q3, were you able to do it

//Solution
//in the object named list a key can be added
list['friend'] = "Mahima"

//in the object named list a key can be updated 
list['s']= 54
console.log(list)

// Explanation
//A new key can be added to the object as well as replaced in the list which is used as a reference to the object, and the keys of the object can be added and replaced 

//--------------------------------------------------------------------------

//Q5 Write a Js program to create a word meaning dictionary of 5 words

const  dictionary = {
    "aggravating":"causing annoyance or exasperation.",
    "stagger":"astonish or deeply shock.",
    "astound":"shock or greatly surprise.",
    "barbaric":"primitive; unsophisticated.",
    "carnival":"a travelling funfair or circus."
}
console.log(dictionary["stagger"])