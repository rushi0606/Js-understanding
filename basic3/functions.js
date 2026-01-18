function sayMyName() {
    console.log("R");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
}
// sayMyName reference
sayMyName() //execute the code

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
// addTwoNumbers() it will give NaN because the values are nnot passed
addTwoNumbers(3, 4)


function addTwoValues(value1, value2){
    let result = value1 + value2
    return result
    console.log("Rushi"); //it will not execute because after returning value the below code des not execute
}
const result = addTwoValues(3, 5)
console.log("Result:",result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Rushikesh"));
console.log(loginUserMessage("")); //when you pass empty value it will show just logged in
console.log(loginUserMessage());  //and when you don't pass value it will show undefined just logged in


function loginUserMessage(username){
    if(username === undefined){       //(username === undefined) = (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); 


//parameter passing

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));
//here even if you pass single parameter and multiple arguments, Rest operator will give the output in the form of array

function calculateCart(val1, val2, ...num1){
    return num1
}
console.log(calculateCart(200, 400, 500, 2000));
//here val1 will be 200 and val2 will be 400 and num1 will return 500 and 2000