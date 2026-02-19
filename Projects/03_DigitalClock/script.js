const clock = document.getElementById('clock')
// document.querySelector('#clock')

//date.toLocaleTimeString() //this gives the time

//to keep updating time per second / to display live time
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)