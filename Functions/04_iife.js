// IIFE (Immediately Invoked Function Expression)
//syntax => (function...)()
//runs immediately after it is created
//used To avoid polluting global scope
//     To create a private scope (encapsulation)


(function chai(){ //named IIFE
    console.log("connected to DB")
})();
//the other code will not work till the IIFE function is not ended and its only ends using a ';' at last. So always put a ';' at last


//using arrow function inside
( () => {
    console.log(`DB disconnected`)
} )();

((name) => { //unnamed IIFE
    console.log(`hello ${name}`)
})("abc");