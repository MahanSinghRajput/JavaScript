if(true) console.log(7), console.log(8); //comma seperated can be executed in a single line

//truthy values
//truthy means the value evaluates to true in a boolean context we dont have to explicitly compare it to true
if(1) console.log(9);
if("non-empty string") console.log(10);
if([]) console.log(11);
if({}) console.log(12);
//truthy values: 1, -1, "string", "0", 'false', [], {}, function(){}, Infinity, -Infinity, BigInt(1)

//falsy values
if(0) console.log(13);
if("") console.log(14);
if(null) console.log(15);
if(undefined) console.log(16);
if(NaN) console.log(17);    
//no output from falsy values
//note: false, -0, 0n, 0, "", null, undefined, NaN are falsy values in JavaScript
//all other values are truthy
//including negative numbers and empty arrays/objects
//e.g.
if(-1) console.log(18);
if([]) console.log(19);
if({}) console.log(20);


//to detect if object is empty
let obj = {};
if(Object.keys(obj).length === 0) {
    console.log("obj is empty");
} else {
    console.log("obj is not empty");
}

//to detect if array is empty
let arr = [];
if(arr.length === 0) {
    console.log("arr is empty");
} else {
    console.log("arr is not empty");
}
//to detect if string is empty
let str = "";
if(str.length === 0) {
    console.log("str is empty");
} else {
    console.log("str is not empty");
}

//Nullish Coalescing Operator (??)
let a = null;
let b = a ?? "default value"; //if a is null or undefined, b gets "default value"
console.log(b); //output: default value

let c = 0;
let d = c ?? 42; //c is 0 which is not null or undefined, so d gets 0
console.log(d); //output: 0

let val;
val = 4 ?? 5; //val is 4 because it's not null or undefined
console.log(val); //output: 4

val = null ?? 5 ?? 10; //val is 5 because the left side is null
console.log(val); //output: 5

//Chained nullish coalescing
let e = null;
let f = undefined;
let g = "Hello";
let h = e ?? f ?? g ?? "Default"; //h gets "Hello"
console.log(h); //output: Hello

//ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); //output: Yes

let number = 5;
let type = (number % 2 === 0) ? "Even" : "Odd";
console.log(type); //output: Odd

