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
 
 Object.freeze(JsUser)  //it doesn't allow any update after this command

 JsUser.name = "Rushi"
 console.log(JsUser["name"]);  //name is still Rushikesh
 console.log(JsUser)

