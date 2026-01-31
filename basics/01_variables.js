const accountId = 1234 //this cant be changed
let accountEmail = "abc@xyz.com"
var accountPassword = "4321"
accountCity = "Delhi"
let accountState

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

//accountId = 2345 //not allowed
console.log(accountId)

accountEmail = "bcd@xyz.com"
accountPassword = "5432"
accountCity = "Ghaziabad"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//var scope bounded nahi hota, isliye var use nahi krte kyuki kahi bhi agar same variable hoga to har jgh change ho jaega. 
// Prefer not to use var because of issue in block scope and functional scope
