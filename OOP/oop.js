//object literal
const user = {
    username: "abcd",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("details")
        console.log(`username: ${this.username}`)
        console.log(this) //prints current context
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())

function User(username, count, loggedIn){
    this.username = username
    this.count = count
    this.loggedIn = loggedIn
    return this //it is defined implicitly, no need to write it
}
const user1 = new User("abc",90,true)
const user2 = new User("bcd", 8, false)
console.log(user1)
console.log(user2)
