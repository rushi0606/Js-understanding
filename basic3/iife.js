function one (){
    console.log(`DB CONNECTED`)
}
one(); //this is simple function

//iife - immediately invoked function expression
//avoids global scope pollution by immediately executing function

(function two(){
    console.log(`DB CONNECTED TWO`);  
})();

( () => {
    console.log(`DB CONNECTED THREE`);  
})();