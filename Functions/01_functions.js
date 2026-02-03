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


//for multiple arguments 
//rest operator bundles the arguments
function calculateCartPrice(...nums){ //rest operator
    return nums
}
console.log(calculateCartPrice(200,300,300,400)) //gives an array
//[ 200, 300, 300, 400 ]

function calculateCartPrice2(val1,val2,...nums){ //rest operator
    return nums
}
console.log(calculateCartPrice2(200,300,300,400))
//[ 300, 400 ]

const user = {
    username: "abc",
    price: 999
}

function handleObject(anyObject){
    console.log(`This is ${anyObject.username} and his cart price is ${anyObject.price}`)
}
handleObject(user) //if user has "prices" instead of "price" then it will show undefined
handleObject({
    username: "abc",
    price:100
})


const newArr = [10,20,30,40]
function secondValue(arr){
    return arr[1]
}
console.log(secondValue(newArr))