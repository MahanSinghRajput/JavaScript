"use strict"; //treat all JS code as newer version
//by default it is on, no need to write this, but it is a good practice.

// alert() // this works in browser not in nodeJS

//number (2^53), bigint, string('' or ""), boolean, null (standalone value)
//undefined, symbol (unique)
//object 

let a = ""
console.log(typeof a)
console.log(typeof undefined) //undefined
console.log(typeof null) // it gives "object" as output which maybe called as an error of the language

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1)
console.log(id2)
console.log(id1 == id2)
console.log(id1 === id2)