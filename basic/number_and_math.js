// Numbers
 
 const score = 400
 console.log(score);

 const balance = new Number(100)
 console.log(balance);            //in this it is specifically defined number in output

 
 console.log(balance.toString().length);
 console.log(typeof(balance));

 console.log(balance.toFixed(2)); //100-100.00
 
 const otherNumber = 132.8933
 console.log(otherNumber.toPrecision(3)); //gives precise value
 
 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); //it will give you simplified value according to indian count with comma

 
 //Maths

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));

console.log(Math.min(3,4,5,6,7));
console.log(Math.max(3,4,5,6,7));

console.log(Math.random());  //every time you run it the value will be different between 0 to 1
console.log(Math.random()*10); //it can give random numbers between 1 to 10 

//it can give random number zero as well so add +1 in it 
console.log((Math.random()*10) + 1);
 


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
