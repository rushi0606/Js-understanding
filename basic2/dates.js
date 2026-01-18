 //Dates & Time

 let myDate = new Date()
 console.log(myDate);     //output will be in milisecond and not readable
 
 //converts ddate in some format
 console.log(myDate.toString());  
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());  
 
 console.log(typeof myDate);

 //accept date and time from user
 let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 console.log(myCreatedDate);
 console.log(myCreatedDate.toDateString());
 console.log(myCreatedDate.toLocaleString());
 
 //date format
 // let createdDate = new Date("2023-01-14")
 let createdDate = new Date("01-14-2023")
 console.log(createdDate.toLocaleString());
 
 let myTimeStamp = Date.now()
 console.log(createdDate.getTime())  //compare myTimeStamp and createdDate.getTime to get current time
 console.log(myTimeStamp);
 console.log(Math.floor(Date.now()/1000));
 
 let newDate = new Date()
 console.log(newDate.getMonth()+1);
 console.log(newDate.getDay());
 
//  newDate.toLocaleString('default',{
//     weekday: "long"
//  })