//const obj = {} //this is a non singleton object
//const obj = new Object() //this is a singleton object
//no internal difference between them

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "abc"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "example@gmail.com",
    fullName: {
        userName: {
            firstName : "bcd",
            lastName : "efg"
        }
    }
}
console.log(regularUser.fullName.userName.firstName)
//you can use quetion marks after these names so that if they dont exist that would not giva an error. like fullName?.userName.firstName



const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {obj1, obj2}
console.log(obj3) //same array problem 

const obj4 = Object.assign({}, obj1, obj2) //{} are optional but prefered
// .assign(target,source1,source2,...)
//if you dont give the {} then all the values are given to the first entry in assign
console.log(obj4)

const obj5 = {... obj1, ... obj2} //spread
console.log(obj5)


//objects in arrays
const users = [
    {
        name: "1",
        email: "a@gmail.com"
    },
    {
        name: "2",
        email: "b@gmail.com"
    },
    {
        name: "3",
        email: "c@gmail.com"
    }
]
//to iterate over these values
console.log(users[1].email)

//to get all the keys of an object
console.log(Object.keys(tinderUser))
//to get all the values
console.log(Object.values(tinderUser))
//to get both
console.log(Object.entries(tinderUser))

//to check if a property exists or not 
console.log(tinderUser.hasOwnProperty("id"))