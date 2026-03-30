class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, subject){
        super(username)
        this.subject = subject
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const abc = new Teacher("abc", "React")
abc.addCourse()

console.log(abc instanceof Teacher) //returns true