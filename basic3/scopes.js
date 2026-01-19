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
