const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task")
        resolve()
    },1000)
})

//resolve connects to then()
promise1.then(function(){
    console.log("promise consumed")
})

//Promise 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

//Promise 3
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "abc", age: 20})
    }, 1000)
})

promise3.then(function(user){
    console.log(user)
})

//Promise 4
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) resolve({name: "abc", password: "1234"})
        else reject('Error: Something went wrong')
    },1000)
})
promise4.then((user) => {
    console.log(user)
    return user.name
}).then((name) => {
    console.log(name)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("Finally the promise is completed"))



//Promise 5
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) resolve({name:"abcd", age: "40"})
        else reject('Error: JS went wrong')
    },1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise5()