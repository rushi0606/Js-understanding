//for of 
// ["", "", ""]
// [{}, {}, {}]

const arr  = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num); 
}


const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(`Each word is ${greet}`);  
}


//map

const map = new Map ()
map.set('IN', "India")
map.set('Fr', "France")

map.set('IN', "India")  //same value will not print twice
console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);   
}


// for of doesn't work on object, it is not iterable so for objects we use for in loop
//for in

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}



const myArray = ["js", "C++", "Java", "Python"]
for (const key in myArray) {
  console.log(key);
}


//forEach

const myArray1 = ["js", "C++", "Java", "Python"]

myArray1.forEach(function(val){
    console.log(val);
});


myArray1.forEach( (val) => {
    console.log(val);
});   //this is arrow function


// [{}, {}, {}]

const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
        {
        languageName: "java",
        languageFileName: "java" 
    },
        {
        languageName: "Python",
        languageFileName: "py" 
    }
]

myCoading.forEach((value) => {
    console.log(value.languageName);
    
})