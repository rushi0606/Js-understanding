//truthy & falsy values

//falsy values - false, 0, -0, BigInt, "", null, undefined, NaN
//truthy values - "0", 'False', " ", [], {}, function(){}


const useremail = "ringale@gmail.com"

if(useremail){
    console.log("Got an email");
}
else{
    console.log("Don't have an email");
}


const username = ""

if(username){
    console.log("Got an email");
}
else{
    console.log("Don't have an email");
}


const user = " "

if(user){
    console.log("Got an email");
}
else{
    console.log("Don't have an email");
}


const usernam = []

if(usernam.length === 0){
    console.log("Got an email");
}
else{
    console.log("Don't have an email");
}



const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}



// Nullish Coalescing Operator (??) null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1)

//Terniary Operator
// condition ? true : false

const price = 100
price >=80 ? console.log("more then 80") : console.log("less than 80")