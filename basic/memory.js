// Stack - primitive
// here it copy the original value but after changing the copied value it does not change the original value

let myYoutubename = "RushikeshIngale"


let anothername = myYoutubename
// console.log(anothername);   
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



// heap - non-primitive
// original value is changed after the refrence value as well

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "rushi@google.com"

console.log(userTwo.email);
console.log(userOne.email);  