// Read MDN for better understanding
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
//each method gives a different form of date

//console.log(typeof myDate)

let myCreatedDate = new Date(2026,0,23) //months start from 0 in JS
console.log(myCreatedDate.toDateString())

let newDate = new Date(2026,0,23,5,6)
console.log(newDate.toLocaleString())

let otherDate = new Date("01-01-2026") //here january starts from 1
console.log(otherDate.toDateString())

//for designing time constraints like for polls and quizes
let myTimeStamp = Date.now() //gives time in milliseconds from 1 jan 1970 to now
console.log(myTimeStamp)
//if you need time in seconds 
console.log(Math.floor(Date.now()/1000))


//you can also get only required fields like day, month, year
let date1 = new Date()
console.log(date1.getDay()) //0 means monday...
console.log(date1.getFullYear())
console.log(date1.getMonth())

// `${date1.getDate()} and the time is ...`

//you can define what you need
console.log(date1.toLocaleString('default', {
    weekday: "long",
}))