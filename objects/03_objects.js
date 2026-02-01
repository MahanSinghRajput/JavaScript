//singleton - object made by constructor.
//Object.create()

//object literals
const JSUser = { //keys are treated as string
    name: "abc",
    "full name": "abc def",
    age: 20,
    location: "Delhi",
    email: "example@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "Wednesday"]
}

//to access object data
console.log(JSUser.name) //normal method
//the normal method fails when key is given within (" ") 
//for example there is no way to access "full name" by this method

console.log(JSUser["name"])
console.log(JSUser["full name"]) //now full name can be accessed

//functions in objects, functions are treated as normal datatypes
JSUser.greeting = function(){
    console.log("hello JS user")
}
console.log(JSUser.greeting())

JSUser.greetingTwo = function(){
    console.log(`hello ${this.name}`) //this keyword helps to refer to the same object
}
console.log(JSUser.greetingTwo())
console.log(JSUser)
//these functions are now added to JSUser


//how to use Symbol inside an object
const myKey = Symbol("key1")
const user = {
    myKey : "key1"
}
console.log(user.myKey) //this gives it as string not sybol

//to use that symbol
const user1 = {
    [myKey] : "abcd", //declare that inseide a square bracket
    //[abc] : "cde" //this would not work beacause "abc" symbol is not initialised 
    //to use a symbol inside an object you first need to declare it as symbol outside
}
console.log(user1[myKey]) //accessed by square brackets only

//freeze
Object.freeze(user1) //now the values of JSUser cant be changed
//it wouldn't give error but would not change the value

