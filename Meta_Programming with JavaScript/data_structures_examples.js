/*
    Data Structures Examples:

    In this reading, you'll learn about some of the most common examples of data structures. The focus will be be working 
    with the Object, Array, Map and Set data structures in JavaScript, though a series of examples.

    Note that this reading will not include a discussion of some data structures that exist in some other languages, such 
    as Queues or Linked Lists. Although these data structures (and other data structues too!) can be custom-coded in 
    JavaScript, the advanced nature of these topic and the difficulty with implementing related exercises means they are 
    beyond the scope of this reading. 

    Working with arrays in JavaScript: 

    Previously, you've covered a lot of concepts related to how to work with JavaSctip arrays. However, there are still a 
    few important topics that can be covered, and one of those is, for example, working with some built-in methods. 

    In this reading, the focus is on three specific methods that exist on arrays:

    1. forEach 
    2. filter
    3. map

    Let's explore these methods. 

    The "forEach()" method:

        Arrays in JavaScript come with a handy method that allows you to loop over each of their members

    Here's the basic syntax:
*/


// creating an array named fruits that stores five strings, fruits. 
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
// creating a function named "appendIndex" that accepts two input parameters named "fruit" and "index"
// the funciton simply prints "index" and "fruit" to the console
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}

// calling the "forEach()" method on the "fruits" array (we are running the appendIndex() method on "fruits") 
// array. (Similar to method chaining fruits.appendIndex.forEach)

// fruits.forEach(appendIndex); 

/*
    The result of running the above code is this: 

    0. kiwi
    1. mango
    2. apple
    3. pear

    To explain the syntax, the "forEach()" method accepts a function that will work on each array item. That function's 
    first parameter is the current array item itself, and the second (optional) parameter is the index. 

    Very often, the function that the "forEach()" method needs to use is passed in directly into the method call, like 
    this:
*/

// creating an array of three strings
const veggies = ['onion', 'garlic', 'potato']; 

// calling the "forEach" method on the "veggies"  which takes the veggie and index as input parameter. 
// Then the console.log method prints the index values and veggies items to the console.
veggies.forEach( function(veggie, index) {

    console.log(`${index}. ${veggie}`); 
}); 

/*
    This makes for more compact code, but herhaps somewhat harder to read. To increase readability, sometimes arrow 
    functions are used. You can find out more about arrow functions in the additional reading. 

    The "filter()" method: 

        Another very useful method on the array is the "filter()" method. It filters your array based on a specific 
        test. Those array items that pass the test are returned. 

        Here's an example
*/

// creating an array named "nums" with a list of integers 
const nums = [0, 10, 20, 30, 40, 50]; 
// calling the "filters()" method on the nums array which takes "nums" items as input parameter, then it returns all values
// that are greater than "20" in the array. 
nums.filter( function(num) {
    return num > 20; 
})

// Here's the returned array value:
// [30, 40, 50]

/*
    Similar to the "forEach()" method, the "filter()" method also accepts a function and that function performs some 
    work on each of the items in the array. 

    The "map" method: 

    Finally, there's a very useful "map" method. 

    This method is used to map each array item over to another array's item, based on whatever work is performed inside
    the function that is passed-in to the map as a parameter. 

    For example, 
*/

// calling the "mpa()" function on the the items stored in the integers array. The method takes num as input parameter 
// and returns array item, integer, divided by 10

data = [0, 10, 20, 30, 40, 50]; 
data.map( function(num) {
    return num / 10
})

/*
    The return value from the above code is: 

    [0, 1, 2, 3, 5, 5]

    As already discussed, choosing a proper data structure affects the very code that you can write. This is because the 
    data structure itself comes with some built-in functionality that makes it easier to perform certain tasks or makes it
    harder to even impossible without converting your code to a proepr data structure. 

    Now that you've covered the methods, let's explore how to work with different built-in data structures in JavaScript. 

    Working with Objects in JavaScript: 

        A lot of information on how to work with objects in JavaScript has already been covered in thos course. 
    The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert
    an object to an array. 
*/ 

// creating an empty array named result
const result = [];
// creating an object named "drone" with two attributes, "speed", "color"
const drone = {
    speed: 100, 
    color: 'yellow'
}

// creating a constant named "drobeKeys()" and assigning it to the "Object.keys()" method that takes "drone" as input 
// parameter, "droneKeys" that contains a list of all the keys of the "drone" object. 
const droneKeys = Object.keys(drone);
console.log("drongKeys type ", typeof(droneKeys))
// calling the "forEach()" method on the "droneKeys"
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result); 

/*
    Although this is possible and works, having to do something like might mean that you haven't chosen to correct data
    structure to work with in your code. 

    On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in 
    from a third-party data provider and all you can do is code your program so that it comsumes it. You'll learn more 
    about the interchange of data on the web when you learn about JSON (JavaScript Object Notation)

    Working with Mpas in JavaScript
 
    To make a new Map, you can use the "Map" constructor: 
*/

new Map(); 

/*
    A map can feel very similar to an Object in JS. However, it doesn't have inheritance. No prototypes! This makes it useful
    as a data storage. 

    For example, 
*/

let bestBoxers = new Map(); 
bestBoxers.set(1, "The Champion"); 
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place"); 

console.log(bestBoxers); 

/*
Here's the console output: 
Map(3) {
  1 => 'The Champion',
  2 => 'The Runner-up',
  3 => 'The third place'
}

To get a specific value, you need to use the "get()" method. For example
*/

bestBoxers.get(1); // 'The Champion'

/*
    Working with Sets in JavaScipt:
    
    A set is a collection of unique values. To build a new set, you can use the "Set" constructor 
*/
new Set(); 

/*
    The "Set" constructor can, for example, accept an array. This means that we can use it to quickly filter an array 
    for unique members. 
*/

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple']; 
const uniqueFruits = new Set(repetitiveFruits); 
console.log(uniqueFruits); 

/*
    The above code outputs the following in the console:
    Set(3) { 'apple', 'pear', 'plum' }

    Other data structures in JavaSctipt:
        Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures. 

    These data structures come built-in natively in some other programming languages or even those other programming 
    languages don't support them natively. 

    Some more advnaced data structures that have not been covered include: 
        * Queues
        * Linked Lists (singly-linked and doubly-linked)
        * Trees 
        * Graphs
        
    For resources on building these data structures, please refer to the additional reading. 
    */
