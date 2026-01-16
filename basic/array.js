//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr.reverse());
console.log(myArr[0]);

const myHeros = ["Ironman", "Thor", "Blackpanther"]

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[1]);

//Array methods

myArr.push(6) //add value at start
myArr.pop()   //remove value from last

myArr.unshift(9)   //add value at the start of the array
myArr.shift()    //remove value from start

console.log(myArr);

console.log(myArr.includes(9));  //it will give boolean answer
console.log(myArr.indexOf(9));    //if the value is not present in array it will give -1
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);   //after joining its type will be string
console.log(typeof myArr);  //its type is object
 
//slice and splice

console.log("A", myArr);
const myArr1 = myArr.slice(1, 3)  //give seperate array of slice elem and add first index elem and second last index elem and will not change in orignal arr
console.log(myArr1);
console.log(myArr);

console.log("B", myArr);
const myArr2 = myArr.splice(1, 3)  //it will remove splice elem from orignal arr
//in splice it is from index number and how many values in last
console.log(myArr2);
console.log(myArr);

console.log(myArr.concat(myArr2)); //adds two or more arrays in one array
const all_new_array = [...myArr, ...myArr2]  //adds two or more arrays using spread operator
console.log(all_new_array);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  //flat gives a single array 
console.log(real_another_array);

console.log(Array.isArray("Rushikesh")) //check whether it is array or not 
console.log(Array.from("Rushikesh")); //converts into array
console.log(Array.from({name : "Rushikesh"})); //it will give empty array it can only convert keys into arrays or only values into array after defining

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
