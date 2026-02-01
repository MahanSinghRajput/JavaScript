function loggedIn(username){
    // if(username === undefined){
    //     return "Please enter a user name"
    // }
    //this can also be written as
    if(!undefined){
        return "Please enter a user name"
    }
    return `${username} just logged in`
}
console.log(loggedIn("abc"))
console.log(loggedIn())

//function can return different datatypes
function abc(num = 8){  //if you pass nothing as argument then 8 is taken as default
    if(num === 5) return 5;
    return "abc"
}
console.log(typeof abc(5))
console.log(typeof abc(4))

/*
    function name(parameter = defaultValue){
        //code
    }
*/