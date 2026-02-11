 //objects

 const mySym = Symbol("key1")
 const JsUser = {
    name: "Rushikesh",
    "full name": "Rushikesh Ingale",
    age: 18,
    location: "Pune",
    email: "ringale@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"],
    [mySym]: "mykey1", 
 }

 console.log(JsUser.name);
 console.log(JsUser["name"]); // in both ways you can get the output
//  console.log(JsUser.full name) //this won't work
 console.log(JsUser["full name"])

//  console.log(JsUser.mySym); //its type is string and it is not appropriate syntax
//  console.log(typeof JsUser.mySym);
 console.log(JsUser[mySym]);

 JsUser.email = "rushi@0606gmail.com" //to update info in object
 console.log(JsUser["email"])


 JsUser.greeting = function (){
     console.log("Hello JS user");
 }
 JsUser.greetingTwo = function (){
     console.log(`Hello JS user, ${this.name}`);
 }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 
//  Object.freeze(JsUser)  //it doesn't allow any update after this command

 JsUser.name = "Rushi"
 console.log(JsUser["name"]);  //name is still Rushikesh
 console.log(JsUser)



const tinderUser = new Object()
// const tinderUser = {}  // works similarly

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log(Object.keys(tinderUser));  //gives only keys in object
console.log(Object.values(tinderUser)); //gives only values in objects
console.log(Object.entries(tinderUser)); //give how may key value pairs are stored
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const regularUser = {
    email: "ringale123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rushikesh",
            lastname: "Ingale"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


//object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
console.log(course.courseInstructor);

const {courseInstructor: instructor} = course //here key courseInstructor is de-structured and given another name 
console.log(instructor);