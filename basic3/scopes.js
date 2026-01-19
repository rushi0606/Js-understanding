let d = 10
const b = 20
var c = 30

console.log(d);
console.log(b);
console.log(c);


var c = 300  //global scope variable
let a = 200

if (true){
 let a = 10
 const b = 20
 var c = 30 
console.log("INNER:", a); //it will give result 10 i.e. inside blocked scope
}

console.log(a); //it will give 200 global scope result
// console.log(b);
console.log(c);   //it will run and give result 30 which shouldn't run because variable declared in blocked scope should not run outside it




//function two can access function one but one can't access two
function one(){
    const username = "Rushi"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); //variable can not execute outside the function scope
    two() 
}
one() //function one will not execute if we write the command to run function one in the inner function



if (true){
    const username = "Rushi"
    if(username === "Rushi"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



 