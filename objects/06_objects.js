const mtObj = {
    name: "abc",
    age: 20,
    key: "a"
}
const dup = {...mtObj} // if you do this then the changes made in dup doesnt show in mtObj. //this makes a copy for the duplicate
console.log(dup)
dup.name = "bcd"
console.log(mtObj.name)
console.log(dup.name)

const duplicate = {key: "b",...mtObj} //it changes the order but doesnt change the value of key
console.log(duplicate)

const duplicate2 = {...mtObj,key:"b"} //changes the value
console.log(duplicate2)

const dup3 = {name: "bc", key: "x",...mtObj}
console.log(dup3)

const dup4 = {...mtObj,name: "bc", key: "x"}
console.log(dup4)

let {name,age:currAge,key:myKey} = mtObj
console.log(name)
console.log(currAge)
console.log(myKey)