/*
    Template literals examples: 

    The aim of this reading is to help you undrstand how template literals work. 

    What are template literals? 

        Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the
    JavaSctipt language. 

    Up until ES6, the only way to build strings in JavaSctipt was to delimit them in either single quotes or double quotes: 

        'Hello, World!'
        "Hello, World!"

    Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters: 
    `Hello, World!`

    The above code snippets is an example of a template string, which is known as a template literal. 

    Note: On most keyboards, the backtick charater can be located above the "TAB" key, to the left of the number 1 key. 

    Differences between a template and regular string:

    There are several ways in which a template string is different from a regular string. 

        * First, it allows for variable interpolation: 
*/
// let greet = "Hello";
// let place = "World"; 
// console.log(`${greet} ${place} !`) // display both variables using template literals

/* 
    The above console log will output: 

    Hello World !

    Essentially, using template literals allows programmers to embed variables directly in between the backticks, without 
    the need to use the "+" operator and the single or double quotes to delimit string literals from variables. 
    In other words, in ES5, the above example would have to be written as follows: 
*/ 

var greet = "Hello"; 
var place = "World"; 
console.log(greet + " " + place + "!"); // display both variables without using template literals

/*
        * Beside variable interpolaton, template strings can span multiple lines. 
    For example, this is perfectly good syntax
*/

`Hello, 
World
!
`

// Notice that this can't be done using "string literals" (that is, strings deliminted in single or double quotes):
// "Hello, 
// World
// "

/*
    The above code, when run, will throw a syntax error. Put simply, template literals allow for multi-line strings -
    something that simply isn't possible with literals. 

        * Additionally, the reason, why it's possible to interpolate variables in template literals is because this 
    syntax actually allows for "expression evaluation"

    In other words, this 
*/

// it's possible to perform arithmetic operation inside a template literal expression 
console.log(`${1 + 1 + 1 + 1 + 1} stars!`); 

/*
    The above example will console the log the following string: "5 stars!". 

    This opens up a host of possibilities. For example, it's possible to evaluate a ternary expression inside a template
    literal. 

    Some additional use cases of template literals are "nested template literals and tagged templates". However, they are
    a bit more involved and are beyond the scope of this reading. 

    If you're curious about how they work, please refer to the additional reading provided at the end of this lesson. 
*/