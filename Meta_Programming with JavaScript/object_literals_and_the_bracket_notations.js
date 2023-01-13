/*
    Object Literal and the Brackets Notation:

    By the end of this reading, you'll be able to:

        * Explain how to build objects using the brackets notation
        * Explain that with the brackets notation you can use the space character inside keys, since property keys are strings
        * Explain that the keys inside the brakcets notation are evalated. 
        * 
    
    Object literals and the brackets notation

    There is an alternative syntax to the dot notation I used up until this point. 

    This alternative syntax is known as the bracket notation.

    To understand how it works, it's best to use an example, so I'll go through the process of coding the "house2" object
    again, in the same way that I did with the dot notation, only this time, I'll use the bracket notation. 
*/

var house2 = {}; 
house2["rooms"] = 4; 
house2['color'] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // { rooms: 4, color: 'pink', priceUSD: 12345 }

/*
    Note that using the brackets notation, I essentiall just wrap each property's key as a string, inside either the single
    or double quotes - just like with regular strings. 

    Then I wrap the entire property key into an opening and a closing square bracket. 

    That's essentially all there is to it. 

    I can both access and update properties on objects using either the dot notation, or brackets notation, or a 
    combination of both, like in the following example:
*/
var car = {};
car.color = "red"; 
car["color"] = "green";
car["speed"] = 200; 
car.speed = 100; 
console.log(car); // { color: 'green', speed: 100 }

/*
    For the time being, this is probably enough information on object creation. 

    Before I disucss the topic of arrays and objects, let me just give you another important piece of information about
    the brackets notation.

    With the brackets notation, I can add space characters inside property names, like this:
*/
car["number of doors"] = 4;
console.log(car); // { color: 'green', speed: 100, 'number of doors': 4 }

// Additionally I can add numbers (as the string data type) as property keys
car["2022"] = 1901; 
console.log(car); //{ '2022': 1901, color: 'green', speed: 100, 'number of doors': 4 }

/*
    However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really
    conveying a lot of useful information. 

    Finally, there's one really useful thing hat bracket notation has but is not available in the dot notation.
    It can evaluate expressions. 

    To understand what that means, conside the following example:
*/

var arrOfKeys = ['speed', 'altitude', 'color']; 
var drone = {
    speed: 100, 
    alititude: 200, 
    color: "red"
}

for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

/*
    * The above code will result in the following output:

    100
    200
    red

    Using the fact that brackets notation can evaluate expressions, I accessed the "arrOfKeys[i]" property on the "drone"
    object.

    This value changed on each loop while the for loop was running

    Specifically, the first time it ran, it was evaluated like this:

        * The value of "i" was "0"
        * The value of "arryOfKeys[i]" was "arryOfKeys[0]", which was "speed"
        * Thus, the "drone[arryofKeys[i]]" was evaluated to "drone["speed"]" which was equal to "100"
    
    This allowed me to loop over each of the values stored inside the drone objecct, based on each of its properties' keys.
*/