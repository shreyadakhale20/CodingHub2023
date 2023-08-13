// nn bb ss u -  Primitive in Js
let nullvalue = null
let number = 345
let Bool = true
let Bignumber = BigInt(234)
let s = "Shreya"
let symbolvalue = Symbol("I am a nice symbol");
let undefinedvalue = undefined

console.log(nullvalue, number, Bool, Bignumber, s, symbolvalue, undefinedvalue)
console.log(typeof s)

// key value pairs
//Non Primitive Data Types - Objects in Js
const item = {
    "Shreya": 98,
    "Siya":true,
    "Rupali":Symbol("Rupali is a cute girl"),
    "Mahima":undefined
}

console.log(item["Rupali"])
