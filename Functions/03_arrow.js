const user = {
    username: "abcd",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website.`)
        console.log(this); //this will give the current context
        
    }
    //this keyword refers to the current context
}
user.welcomeMessage()
user.username = "bcde"
user.welcomeMessage()

console.log(this) //this will give current context as {} bcoz we are in an node enviornment which refers to an empty context
//but when you print this in browser this will not give empty. It gives Window object.

function chai(){
    console.log(this)
} //this keyword workd in objects not for functions you cant write this.element in functions like in objects

chai() //gives a lot of values


// const code = function(){
//     const username = "a"
//     console.log(this.username) // gives undefined as output
//     console.log(this) //gives a lot of data
// }


//arrow
const code = () => {
    let name = "abc"
    console.log(this.name) //undefined
    console.log(this) //{}
}
code()

// const add = (a,b) => {
//     return a+b
// }
//this can be written as

const add = (a,b) => a+b
//const add = (a,b) => (a+b) you can write as this too
//this is called implicit return. It has a single statement

const hello = () => ({username : "abc"}) 
//to return objects we need to put this in () or else it wouldnt return anything
console.log(hello())