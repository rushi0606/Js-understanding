//for loop

for (let i = 0; i <=10; i++){
    // const element = i
    if(i==5){
        console.log("5 is best number");
    }
    console.log(i);
}



for (let i = 0; i <=10; i++){
    console.log(`outer loop: ${i}`);
    
    for (let j = 0; j <=10; j++){
       console.log(`inner loop value ${j} and outer loop ${i}`);
       
 }
} 



let myArray = ["ironman", "thor", "black panther"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}


//break and continue

for (let i = 0; i <=10; i++){
    
    if(i==5){
        console.log("5 Detected");
        break   //it skips all the iterations after break
    }
    console.log(i);
}

for (let index = 0; index <=10; index++){
    
    if(index==5){
        console.log("5 Detected");
        continue   //it print the statement and skip the iteration
    }
    console.log(index);
}