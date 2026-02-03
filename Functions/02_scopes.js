if(true){
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a) //this would not work as let is block scoped
//console.log(b) //this would not work as const is block scoped
console.log(c) //this works outside the block as var is not block scoped

let a = 200
if(true){
    let a = 100
}
console.log(a) //it takes the value through global scope

//global scope for node and browser are different.


//scope nesting

function one(){
    const username = "abc"
    function two(){
        const app = "facebook"
        console.log(username)
    }
    //console.log(app) //this is outside the scope
    two()
}
one()


//+++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
addOne(5) //this will not give error
function addOne(nums){
    return nums + 2
}

//addTwo(5) //this gives error
const fun = function addTwo(nums){
    return nums + 2
}
//if you hold a function in a variable then you cant call them before declaration