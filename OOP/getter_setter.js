class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    //getters and setters are automatically created for each variable
    //if you define a getter, then you will also have to give setter
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        //this.password = value //this gives "call stack size exceed" error as both constructor and setter start competing to set the values

        //use a underscore with variable and also change it in getter
        this._password = value
    }
}

const abc = new User("abc@e.com", "123abc")
console.log(abc.password)


//getter setter using properties (old methods)
function User(email, password){
    this._email = email
    this._password = password

    //this works as getter and setter
    Object.defineProperty(this,'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}