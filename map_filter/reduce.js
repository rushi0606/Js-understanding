const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currentvalue) {
  console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
  return acc + currentvalue;
}, 0); //acc means initial value to start with i.e 0, you can add different values

console.log(myTotal);


const myTotal1 = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal1);



const courses = [
  {
    id: 1,
    name: "HTML & CSS",
    price: 1000,
    duration: "1 month",
  },
  {
    id: 2,
    name: "JavaScript",
    price: 2000,
    duration: "2 months",
  },
  {
    id: 3,
    name: "React",
    price: 3000,
    duration: "2 months",
  },
  {
    id: 4,
    name: "Node.js",
    price: 2500,
    duration: "2 months",
  },
];

const mycourse = courses.reduce((acc, item) => acc + item.price, 0);
console.log(mycourse);
