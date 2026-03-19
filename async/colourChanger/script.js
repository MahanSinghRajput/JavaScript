//generate a random colour
const randomColour = function(){
    const hex = '0123456789ABCDEF'
    let colour = '#'
    for(let i=0;i<6;i++){
        colour += hex[Math.floor(Math.random()*16)]
    }
    return colour;
}
let intervalID
const startChangingColour = function(){
    if(!intervalID) intervalID = setInterval(changeBackgroundColour,500)
    function changeBackgroundColour(){
        document.body.style.backgroundColor = randomColour()
    }
}

const stopChangingColour = function(){
    clearInterval(intervalID)
    intervalID = null
}

document.querySelector('#start').addEventListener('click',startChangingColour)
document.querySelector('#stop').addEventListener('click',stopChangingColour)