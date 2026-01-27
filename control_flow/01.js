//if

const isUserloggedIn = true     // = means operator or value assign

if(isUserloggedIn){
//   code will execute when condition meet 
}

if(isUserloggedIn){
//   code will not execute when condition does not meet
}

//comparision
// 2<=2, <, >, <=, >=, ==, !=, ===, !==


//conditional
const temperature = 41

if (temperature < 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
//if we did not add else then both the sentence will be printed


const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`); //this comes under scope it can only be written inside the curly braces{}
}
else{
    console.log("not executed"); 
}

//implicit scope

const balance = 1000
if(balance >500) console.log("correct");



//nesting

const balance2 = 2000

if (balance2 < 500) {
    console.log("less than 500");
}
else if (balance2 < 750){
    console.log("less than 750");
}
else if (balance2 < 950){
    console.log("less than 950");
}
else{
    console.log("less than 2200");
}


//&& - checks all the conditions and it can be added two times

const userloggedIn = true
const debitCard = true

if(userloggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}
// if(userloggedIn && debitCard && 2==3){
//     console.log("Allow to buy courses");
// } it wont run


// || - means or, checks multiple conditions and even if only one condition is true it runs the code

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}