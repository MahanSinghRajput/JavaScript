const myArr = [0,1,2,3,4,5,"abc",true] 
const myArr2 = new Array(1,2,3,4,"abc")
//console.log(myArr[0])
//array can contain a mix of datatypes.
//arrays are resizable.
//JS array-copy operation creates shallow copy.

//shallow copy - objects share the same reference.
//deep copy - objects do not share the same reference.

//array methods
myArr.push("cd") //adds at last
console.log(myArr)
myArr.pop() //removes last
console.log(myArr)
myArr.unshift(9) //adds at front
console.log(myArr) 
myArr.shift() //removes front
console.log(myArr)
console.log(myArr.includes("abc")) //checks it the value exists in the array or not
console.log(myArr.indexOf("abc")) //gives -1 or index of the element

const newArr = myArr.join() //changes the type of myArr to string and joins to newArr
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice and splice
console.log("A ", myArr)

//slice takes a copy of the given part
//slice doesnot include the end index [start, end)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

//splice rempoves and takes that part from the array
//splice also includes the end index [start,end]
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr)

//slice makes changes in the copy, splice changes the original array