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
