//declaration
const map = new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
console.log(map)

//for of in map
for (const key of map) {
    console.log(key) //this gives both key and value as array
}

//to get key and value seperately
for (const [key,value] of map) {
    console.log(`This is key: ${key} and this is value: ${value}`)
}
//this only works for maps

//for objects
const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
}

for (const key in myObj) {
    console.log(key) //only gives keys.
    console.log(myObj[key]) //gives values
}

//forin has keys, forof has values, forin doesnot work on maps