const name = "abc"
const repoCount = 50
console.log(name + repoCount + " value") //outdated

//use backticks
console.log(`My name is ${name} and I have ${repoCount} repositories.`)

//to get methods for strings define as follows
const name2 = new String('abcdef')
console.log(name2)
console.log(name2[0])
console.log(name2.__proto__)
console.log(name2.length)
console.log(name2.toUpperCase()) //original value is not changed
console.log(name2.indexOf('a')) //and a lot more

const name3 = name2.substring(0,3) //[start,end)
console.log(name3)

const name4 = name2.slice(-6,4)
console.log(name4)

//if you give negative value to substring it will change it to 0

const newString = "    abcd      "
console.log(newString)
console.log(newString.trim())

const url = "https://google.com/googe%20result"
console.log(url.replace("%20", "-"))
console.log(url.includes("google"))

//if you want to split a string based on a character
const example = "abc-def-ghi"
console.log(example.split('-'))
const words = example.split('-')
console.log(words[0])