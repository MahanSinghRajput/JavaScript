let score = "11"
//console.log(typeof score)

let scoreInNumber = Number(score)
//console.log(typeof scoreInNumber)

let a = "345nfsk"
let num = Number(a)
//console.log(typeof num) //number
//console.log(num) //it gives NaN (Not a Number)

let b = null
let bnum = Number(b)
//console.log(typeof bnum) //number
//console.log(bnum) //0

let c = undefined
let cnum = Number(c)
//console.log(typeof cnum) //number
//console.log(cnum) //NaN

//true gives 1, false gives 0, string gives NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// "" => false, "abc" => true

let n = 33
let stringN = String(n)
//console.log(stringN)
//everything changes to string


// ********************** Operations **********************

let val = 3
let negVal = -val
//console.log(negVal)

// +,-,*, ** (power),/,%

let str1 = "hello "
let str2 = "world"
// console.log(str1 + str2);

// console.log(1 + "2") //12
// console.log("1" + 2) //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32
// console.log(1 + 3 + "2" + 2) //422
// console.log(1 + 3 + "2" + 2 + 2) //4222

// console.log(+true)
// console.log(+"")
// console.log(+"abc")

let n1,n2,n3
n1 = n2 = n3 = 4
n1++