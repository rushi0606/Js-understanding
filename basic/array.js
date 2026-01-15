//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
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
