//reduce
const myNums = [1,2,3,4,5,6,7,8,9,10]

const initialValue = 0
const myTotal = myNums.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator} and Current Value ${currentValue}`)
    return accumulator + currentValue
},initialValue)

//const myTotal = myNums.reduce((accumulator, currentValue) => { return accumulator + currentValue }, initialValue)
//const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(myTotal)
//accumulator is like a container that holds the total value
//currentValue is the current item in the array


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);