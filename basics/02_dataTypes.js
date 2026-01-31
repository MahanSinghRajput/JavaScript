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


//stack 
let name = "abc"
let anotherName = name
anotherName = "bcd"
console.log(anotherName);
console.log(name);

//heap
let user = {
    email: "user@email.com",
    upi: "user@upi"
}
let anotherUser = user
anotherUser.email = "anotherUser@email.com"
console.log(user.email);
console.log(anotherUser.email)

//in heap changing values in one object also changes value for other as both are referencing to the same object.
//whereas in Stack a copy is made hence change in any one doesn't reflect on another.