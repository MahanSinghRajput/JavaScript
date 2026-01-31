const score = 400;
console.log(score)

const newScore = new Number(100)
console.log(newScore)
console.log(newScore.toString()) //changes to string
console.log(newScore.toString().length)

console.log(newScore.toFixed(2)) //gives upto 2 decimal places

const num = 123.8966
console.log(num.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //10,000,000
console.log(hundreds.toLocaleString('en-IN')) //1,00,00,000

//max min values
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)


//************************* Maths *************************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.min(1,2,3,4,5,6,7)) //can be used for arrays

console.log(Math.random()) //between 0 to 1
console.log((Math.random()*10)+1) //between 1 to 10
console.log(Math.floor(Math.random()*10)+1)

const min = 10, max = 20
//(Math.random() * (max - min + 1) + min) //this gives values in desired range
//(max-min+1) defines the range

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
//output will always be in between min, max

//ceil,floor,pow,sqrt all are available