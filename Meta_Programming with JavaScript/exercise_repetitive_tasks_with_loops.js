/*
    Exercise: Repetitive tasks with loops:

    In this exercise, you will practice writing "for" and "while" loops. 

    Task 1: 
        Write a "for" loop that will perform the exactly same repetitive code as this: 
*/
for (var i = 1; i < 6; i++) {
    console.log(i);
}
console.log("Counting completed!")

for (var i = 5; i > 0; i--) {
    console.log(i);
}
console.log("Countdown finished!"); 

// Write a "while" loop that will perform exaclty the same repetitive code as this. 
var number = 1; 
while (number < 6) {
    console.log(number)
    number++; 
}
console.log("Counting completed!")

var number = 5; 
while(number > 0) {
    console.log(number);
    number--; 
}
console.log("Counting complete!")

/*
    * Note, in the while loop, decrement the value if i using: "i = i - 1"
*/

var year = 2018; 

while (year < 2023) {
    console.log(year); 
    year++; 
}