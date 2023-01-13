/*
    Return values from functions:

    Many functions, by default, return the value of "undefined"

    An example is the "console.log()" function. 

    If I run:
*/

console.log('Hello');

/*
    Here's the output in the console:

    Hello
    undefined

    Because the "console.log()" function is built so as to not have the explicitly set return value, it gets the default 
    return value of "undefined"

    I'll now code my own implementation of "console.log()", which doesn't return the value of "undefined"
*/

function consoleLog(val) {
    console.log(val)
    return val 
}

/*
    I'm using the "console.log()" function inside my custom "consoleLog" function declaration. ANd I'm specifying it to 
    return the value of its argument. 

    Now when I run my custom "consoleLog()" function
*/

consoleLog('Hello')

// I get 

// Hello
// 'Hello'

/*
    So, the value is output in the console, but it's also returned. 

    Why is this useful?
    It's useful because I can use return values from one function inside another function

    Here's an example. I'll first code a function that returns a double of a number that it received: 
*/

function doubeIt(num) {
    return num * 2
}

/*
    Now I'll code another function that builds an object with a specific value
*/
function objectMaker(val) {
    return {
        prop: val
    }
}

// I can call the "objectMaker()" function with any value I like, such as: 
objectMaker(20);

// The returned value will be an object with a single "prop" key set to "20"

// {prop: 20}

// Now consider this code
doubleIt(10).toString()

// The above code returns the number 20 as a string that is "20"
// I can even combine my custom function calls as follows: 
objectMaker(doubleIt(100)) ; 

// This will now return the following value 
{prop: 200}

/*
    What does all of this mean?

    It means that by JavaScript allowing me to use the "return" keyword as described above, I can have multiple function 
    calls, returning data and manipulating values, based on whatever coding challenge I have in front of me. 

    Being able to return custom values is one of the foundations that makes functional programming possible. 
*/