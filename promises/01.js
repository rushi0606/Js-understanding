const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise complete');
    
})




new Promise(function(resolve, reject){   
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 resolved');
    
})  //it can be written and executed in one as well




const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve ({username: "Rushi", email: "rushi@0606.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})   // you can access the data inside the resolve in then directly




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Rushikesh", password:"123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
}) 
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumepromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumepromiseFive()




// async function getAllUsers(){
//     try{
//         const response = await fetch ('http://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     }
//     catch(error){
//         console.log("E:",error);
        
//     }
// }
// getAllUsers()

fetch('http://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))