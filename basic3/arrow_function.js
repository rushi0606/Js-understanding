 //this keyword is simply current context

 const user = {
    username: "Rushi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


//arrow function

const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumbers(3, 4));


//implicit return

const addThreeNumbers = (num1, num2, num3) => num1 + num2 + num3
console.log(addThreeNumbers(3, 4, 5));

// another way

// const addThreeNumbers = (num1, num2, num3) => (num1 + num2 + num3)
// console.log(addThreeNumbers(3, 4, 5));
