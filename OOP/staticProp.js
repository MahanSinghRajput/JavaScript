class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    static createId(){
        return "123"
    }
}
const abc = new User("abc")
//console.log(abc.createId()) //gives error