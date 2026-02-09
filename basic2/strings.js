const name = "Rushikesh"
const repoCount = 60

console.log(name + " " + repoCount + " value");   //outdated way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //standard way



const gameName = new String('swapnil-in-com')

console.log(gameName[0]);
console.log(gameName.__proto__);  //it is object type
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

console.log(gameName.split('-')); //it will split the string and give in form of array



const newSting = gameName.substring(0, 4)
console.log(newSting);

const anotherString = gameName.slice(-6, 6)
console.log(anotherString);


const newOneString = "      Dikshant     "
console.log(newOneString);
console.log(newOneString.trim());  //it trims the unwanted space


const url = "https://rushi.com/rushi%20ingale"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));  //this will give true or false for whether it is present or not 