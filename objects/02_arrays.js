const marvelHeros = ["Iron Man", "Thor", "Captain America"]
const dcHeros = ["Superman", "Batman", "Flash"]

marvelHeros.push(dcHeros)
//it adds the complete array as an element
console.log(marvelHeros)
//[ 'Iron Man', 'Thor', 'Captain America', [ 'Superman', 'Batman', 'Flash' ] ]
//to access any element of dc from marvel
console.log(marvelHeros[3][2])

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros) //it concatenates both arrays

const allHerosBetter = [...marvelHeros, ...dcHeros] //spread
//this is known as spread, (...) spreads each element of the array
console.log(allHerosBetter)

const newArray = [1,2,3,[4,5],6,[6,7,[8,9]]]
const usableNewArray = newArray.flat(Infinity);
//you need to give depth, till how you need the arrays to be conctenated
//you can give Infinity to concatenate everything into a single array
console.log(usableNewArray)

console.log(Array.isArray("abc"))
console.log(Array.from("abc")) //converts abc to an array

console.log(Array.from({name: "abc"}))
//gives [] as output because it cant figure out what to add in the array, key or value

let a = 10, b = 20, c = 30;
console.log(Array.of(a,b,c)) //creates an array of given elements