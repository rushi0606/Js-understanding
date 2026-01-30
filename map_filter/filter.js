const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums)

// const newNums = myNums.filter((num) => {
//     return num > 4     in blocked scope {} you must have to return the value
// })
// console.log(newNums);   
 

//forEach
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums1 = []

myNums1.forEach((num) => {
    if(num>4){
        newNums1.push(num)
    }
})
console.log(newNums1);



//filter

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 450,
    category: "Programming"
  },
  {
    id: 2,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    price: 350,
    category: "Programming"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 300,
    category: "Self-Help"
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 250,
    category: "Fiction"
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 400,
    category: "Finance"
  }
];


const newbooks = books.filter ((bk) => bk.category === 'Programming')
const newbooks1 = books.filter ((bk) => bk.price > 350 && bk.category === 'Finance')
console.log(newbooks);
console.log(newbooks1);


