# On browser console
console.log(window) -> document
            Or
console.log(document) //this only gives the html 

//if you need more
console.dir(document)

//document methods
document.getElementById()
document.getElementById().innerHTML = "<></>" //you can change the values
document.getElementById().id = tells the id
document.getElementById().className = gives the class name
document.getElementById().getAttribute(id/class) = gives all the attributes
document.getElementById().setAttribute(id/class, newName) = sets the attribute name


idName.style.backgroundColor = 'color' //sets the color
idName.style.padding/borderRadius


//Content of a tag
idName.textContent //gives all the content even if its hidden
idName.innerHTML //supports HTML tags inside
idName.innerText //gives only displayed content


document.querySelector('h1') //gives the first h1 tag element
//to select by id use #idName and to select by class .className
//for input tags document.querySelector('input[type = ""]') 
//this can be stored in variables too

document.querySelectorAll('h1') //gives all the h1 tagged elements
//gives a NodeList (this is not pure array)
//you can hold this in a variable and access them through indexing
//you get forEach method


document.getElementByClassName('')
//this gives a HTMLCollection (this is also not pure array)
//no forEach method

//to convert to array from HTMLCollection or NodeList
// Array.from("variable name holding value")