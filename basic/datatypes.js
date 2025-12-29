"use strict";
const { object } = require("motion/react-client");

 //treat all JS code as newer code

let name = "Rushikesh"
let age = 22
let isLoggedIn = false

let sam;

console.table([age, name, isLoggedIn, sam, typeof(name)])
/* 
number
bigint
string
boolean
object
undefined
symbol
null
*/



//primitive datatype: string, number, boolean, null, undefined, symbol, BigInt


//Non-primitive datatype(refrence): array, object, function
//Array
const heros = ["Ironman", "Batman"]
    console.log(heros)

//object
let myobj = {
    name:"Rushikesh",
    age:22
}
     console.log(myobj);
     

// function
const myFunction = function(){
    console.log("hello world");
    
}
myFunction();
