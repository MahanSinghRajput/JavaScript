// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI) //not getting overwritten

//Why is it not getting overwritten?
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //gives hidden details

console.log(descriptor)
/*
    output:
    {
    value: 3.141592653589793,
    writable: false,   //this causes this
    enumerable: false,
    configurable: false
    }
*/


//to create such things by yourself
const user = {
    name: "name",
    price: 100,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(user, "name"))

Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"))


//to iterate objects
for(let [key,value] of Object.entries(user)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
}

//here the enumerated output will not show name as enumeration for name is off