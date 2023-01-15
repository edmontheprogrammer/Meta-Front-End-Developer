/*
    For of loops and objects: 

    In this reading, you'll learn how the for of loop works conceptually. To begin, it's
    important to know that a for of loop cannot work on an object idrectly, since an 
    "an object is not iterable". For example,
*/

const car = {
    speed: 100, 
    color: "blue"
}

// for (prop of car) {
//     console.log(prop)
// }

/*
    Running the above code snippet will throw the following error: 

    Uncaught TypeError: car is not iterable

    Contrary to objects, arrays are iterable. For example: 
*/

const colors = ['red', 'orange', 'yellow']

// for (var color of colors) {
//     console.log(color); 
// }

/*
    This time, the output is as follows: 

    red 
    orange
    yellow

    Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects. 

    But how? 

    Before you can properly answer this question, you first to to review three built-in methods: 
    "Object.keys()", "Object.values" and "Object.entries"

    Built-in methods: 

    The Object.keys() method:

        The "Object.keys()" method recieves an object as its parameter. Remember, this object is "the object you want to"
        loop over. It's still too early to expalin how you'll loopver the object itself; for now, focus on the returned 
        of array properties when you call the "Object.keys()" method. 

        Here's an example of running the "Object.keys()" method on  a brand new "car2" object:
*/

const car2 = {
    speed: 200, 
    color: "red"
}
// console.log(Object.keys(car2)); // ['speed', 'color']

/*
    So, when I run "Object.keys()" and pass it my "car2" object, "the returned value is an array of strings", where each 
    string is a property key of the properties contained in my "car2" object. 

    The Object.values() method

    Another useful method is "Object.values()":
*/

const car3 = {
    speed: 300, 
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

/*
    The Object.entries() method: 

    Finally, there's another useful method, "Object.entries()", which returns an array listing both the keys and values.
*/
const car4 = {
    speed: 400, 
    color: 'magenta'
}
// console.log(Object.entries(car4)); 
// What we gets returned from the invoaction of the "Object.entries()" method is the following:
// [['speed': 400], ['color': 'magenta']]

/*
    This time, the values that get returned are 2-member arrays nested inside an array. In other words, you get an array
    of arrays, where each array item has two members, the being a property's key, and the second being a property's value. 

    Effectively, it's as if you was listing all of a given object's properies, a bit like this: 

    [

        [propertyKey, propertyVal], 
        [propertyKey, propertyVal], 
        ....etc
    ]

    To summarise, you learned that you can loop over arrays using the "for of" loop. You also learned that you can extract
    object's keys, values, or both, using the "Object.keys()", "Object.values()" and "Object.entries()" syntax

    Examples: 

        You now have all the ingredients that you need to "loop over any object's own property keys and values"
    Here's a very simple example of doing just that:
*/

var clothingItem = {
    price: 50, 
    color: 'beige', 
    material: 'cotton', 
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {
    console.log(keys, ":", clothingItem[key])
}

/*
    The trickiest part of understand in this syntax is probably the "clothingItem[key]"

    Luickly, this is not too hard to comprehend, especially since you've already covered the concept previously when you 
    were learning "how to access an object's member using the brackets notation". 

    Recall that you also learned how you can dynamically access a property name. 

    To revisit this concept and hows a practical demo of how that works, let's code a function declaration that 
    randomly assigns either the string "speed" or the string "color" to a variable name, and then build an object that has 
    two keys: a "speed" key and a "color" key

    After this setup, you will be able to dynamically access either one of those properties on a brand new "drone" object
    using the brackets notation. 

    Here's the example's code: 
*/

// function testBracketsDynamicAccess() {
//     var dynamicKey = Math.random() > 0.5 ? "speed": "color"; 

//     var drone = {
//         speed: 15, 
//         color: "orange"
//     }

//     console.log(drone[dynamicKey]); 
// }

// testBracketsDynamicAccess();

/*
    This example might feel a bit convoluted, but its purpose is to demo the fact that you're getting etiehr one or the 
    other value from an object's key, based on the the string that got assigned to the "dynamicKey" variable, and accessed
    without issues, using the bracket notation. 

    Feel free to run the "testBracketsDynamicAccess()" function a few times, and you'll notice that sometimes the value 
    that gets output is "15", and sometimes it's "orange", although I'm always accessing the "drone[dynamicKey]" key. 
    Since the value of the "dynamicKey" is populated on the "Math.random()" invoaction, sometimes that expression 
    evaluates to "drone["speed"]", and other times that expression evalutes to "drone["color"]"

    You have now learned about the building blocks that make the for of loop useful to iterate over objects - although 
    objects are not iterables. 

    Next, you'll have a go at a practical example of working with both the for of and the for in loop. Each loops have their
    place and can be considered useful in different situations. 
    */