/*
    Exerciese: Practice Conditional Statments: 

        Introduciton

    In this exercise, you will practice working with "if else" statements. By the end of this exercise, you will be able to 
    write an "if else" statment that determines your source of income based on your age. You will be able to write a 
    "switch" statment that determines your evening routine based on the day of the week. 
*/
var age = 10; 
if (age >= 65) {
    console.log("You get your income from your pension");
} else if ((age < 65) && (age >= 18)) {

    console.log("Each month you get a salary")
    
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

var day = "Sunday"; 
switch (day) {
    case "Monday":
        console.log("Monday"); 
        break; 
    case "Tuesday":
        console.log("Tuesday"); 
        break; 
    case "Wednesday":
        console.log("Wednesday"); 
        break; 
    case "Thuresday":
        console.log("Thuresday"); 
        break; 
    case "Friday":
        console.log("Friday"); 
        break;
    case "Saturday":
        console.log("Saturday"); 
    case "Sunday":
        console.log("Sunday"); 
        break; 
    default:
        console.log("Invalid date value")
        break;
}

/*
    Tips: 
        * If you need to make sure that multiple conditions are true in an if statment, you can do so using the "&&" operator
        * In JavaScript, the correct syntax of the "greater than or equal to" operator is : >= 
        * Don't forget to add a break at the very end of each case in a switch statment. 
*/