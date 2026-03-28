function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

//creating own function in prototype
createUser.prototype.increment = function(){
    this.score++; //here this is important, to know which function has called
}

createUser.prototype.printMe = function(){
    console.log(`name is ${this.username}, score is ${this.score}`)
}

const coffee = new createUser("coffee",80) //without new keyword, we can't use the injected functions
const chai = new createUser("chai", 100)

chai.printMe()
