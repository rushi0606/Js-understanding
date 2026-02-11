let score = "33"
console.log(typeof score)
console.log(typeof (score))  //both works
let value = Number(score)
console.log(typeof value)


let age = "33abc"
console.log(typeof (age));
let valueage = Number(age)
console.log(typeof (valueage))  //it will show number as type
console.log(valueage) //but in this case it will show NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


/* "33" => 33
   "33abc" => NaN
   true => 1  false => 0  "" => false  "hitesh" => true
   null => 0
   undefined => NaN  */



// operations..........

let numvalue = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " rushikesh"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2 + 2); // when string is first the next values are also considered as string
console.log(1 + 2 + "2"); // when operation is first then it is performed first and then string is attached