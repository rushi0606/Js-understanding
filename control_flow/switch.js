//switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }  syntax  

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break; //if you do not write break here it will print rest of the below code
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}


//for string it is the same

const months = "March"
switch (months) {
    case "January":
        console.log("January");
        break;
    case "Feburary":
        console.log("Feburary");
        break;
    case "March":
        console.log("March");
        break; //if you do not write break here it will print rest of the below code
    case "April":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}