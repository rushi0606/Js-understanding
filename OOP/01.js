//Object literal

const user = {
    username: "Rushi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from the database");
        // console.log(`username : ${this.username}`);  
        console.log(this); //current context it will give all the data inside
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //in global context it will give empty pharanthesis because it doesn't have any data
//in browser it changes




//constructor function
//here new is the constructor function, it allows to make multiple instances from one

// const promiseOne = new Promise()
// const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isLoggedIn

    // return this
}

const userOne = new User("Rushi", 22, true)
const userTwo = new User("Ajinkya", 25, true)
console.log(userOne)
console.log(userTwo);
