function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    //setUsername(username) 
    //this method is not useful as when its execution is done its execution context is removed from call stack and the changes it made are not visible 

    //to make it work
    setUsername.call(this, username) //passing "this" is optional it works as setUsername.call(username) this as well

    //this.username = username
    this.email = email
    this.password = password
}

const user = new createUser("abc","abc@gmail.com","abc123")
console.log(user)