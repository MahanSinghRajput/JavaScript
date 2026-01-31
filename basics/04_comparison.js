// console.log("2" > 1) //true
// console.log("02" > 1) //true

console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true

//this happens because equality check (==) and comparisons (>,<,>=,<=) work differently.
//Comparisons convert null to a number, treating it as 0.
//Thats why null >= 0 is true ans null > 0 is not true

console.log(undefined > 0)  //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false
//avoid these null and undefined comparisons

//== vs ===
console.log("2" == 2) //true
console.log("2" === 2)//false