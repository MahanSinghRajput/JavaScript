const form = document.querySelector('form')

//this usecase gives you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    //to take input values, this gives a string
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        
        //display in results
        results.innerHTML = `<span>${bmi}</span>`
    }
})