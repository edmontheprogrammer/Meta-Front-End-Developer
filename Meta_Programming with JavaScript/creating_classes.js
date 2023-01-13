/*
    Creating classes: 

        By the end of this reading, you should be able to explain, with examples, the concept of extending classes using
    basic inheritance to alter behavior within child classes. 

    By now, you should know that inheritance in JavaScript is based around the prototype object. All objects that are built
    from the prototype share the same functionality. 

    When you need to code more complex OOP relationships, you can use the "class" keyword and its easy-to understand and 
    easy-to-reason about syntax. 

    Imagine that you need to code a "Train" class. Once you've coded this class, you'll be able to use the keyword "new" to
    instantiate objects of the "Train" class

    For now though, you first need to define the "Train" class, using the following syntax: 
*/
class Train {}

/*
    So, you use the "class" keyword, then specify the name of your class, with the first letter capitalized, and then you 
    add an opening and closing curly brace. 

    In between the curly braces, the first piece of code that you need to define is the "constructor":
*/
class Train {
    constructor(color, lightsOn) {

        this.color = color; 
        this.lightsOn = lightsOn;

    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightsStats() {
        console.log('Lights on?', this.lightsOn); 
    }

    getSelf() {
        console.log(this); 
    }

    getPrototype() {
        var proto = Object.getPrototype(this); 
        console.log(proto); 
    }
}

/*
    The "constructor" will be used to build properties on the future object insance of the "Train" class. 

    For now, let's say that there are only two properties that each object instance of the "Train" class should have at 
    the time it gets instantiated: "color" and "lightsOn"

    Notice the syntax of the constructor. The constructor is a special function in my "Train" class. 
    
    First of all, notice that there is no "function" keyword. Also, notice that the keyword "constructor" is used to define
    this function. You give your "constructor" function parameters inside an opening and closing parenthesis, just like in 
    regular functions. The names of parameters are "color" and "lightsOn". 

    Next, inside the "constructor" function's body, you assinged the passed-in "color" parameter's value to "this.color"
    and the passed-in "lightsOn" parameter's value to "this.lightsOn"

    What does this "this" keyword here represent? 

    It's the future object instance of the "Train" class:

    Essentially, this is all the code that you need to write to achieve two things: 

        1. This code allows me to "build new instances of the 'Train' class"
        2. Each object instance of the "Train" class that I build will have its own custom properties of "color" and 
            "lightsOn"

    Now, to actually build a new instance of the "Train" class, I need to use the followig syntax
*/

new Train(); 

/*
    Inside the parentheses, you need to pass values such as "red" and "false", for example, meaning that the "color" 
    property is set to "red" and the "lightsOn" property is set to "false". 

    And. to be able to interact with the new object built this way, you need to assign it to a variable Putting it all 
    together, here's your first train:
*/

var myFirstTrain = new Train('red', false); 

// Just like any other variable, you can now, for example, console log the "myFristTrain" object:
console.log(myFirstTrain); // Train {color: 'red', lightsON: 'false'}

/*You can continue building instances of the "Train" class. Even if you give them exactyl the same properties, they are 
still separate objects. */
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false); 

/*
    However, this is not all that classes can offer. You can also add methods to classes, and these methods will then be 
    shared by all future instances of my "Train" class

    For example, see the code above 

    Now, there are four methods on your "Train" class: 

    "toggleLights()". "lightsStatus()", "getSelf()", and "getPrototype()"

    1. The "toggleLights" methods uses the logical not operator. This operator will change the value stored in the 
        "lightsOn" property of the future instance object of the "Train" class; hence the "!this.lightsOn"/ And the "="
        operator to its left means that it will get assigned to "this.lightsOn", meaning that it will become the new 
        value of the "lightsOn" property on that given instance object. 
    2. The "lightsStatus()" method of the "Train" class just reports the current status of the "lightsOn" variable of a 
        given object instance. 
    3. The "getSelf()" method prints out the properties on the object instance it is called on. 
    4. The "getPrototype()" console logs the prototype of the object instance of the "Train" class. The prototype holds all 
    the properties shared by all the object instances of the "Train" class. To get the prototype, you'll be using
    JavaScript's built=in "Object.getPrototypeOf()" method, and passing it "this" object - meaning, the object instance 
    inside of which method is invoked. 

    Now you can build a brand new train using this updated "Train" class: 
*/
var train4 = new Train('red', false); 

// And now, you can run each of its method, one after the other to confirm their behavior. 
train4.toggleLights(); // undefined
train4.lightsStats(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototoype: f}

/*
    The result of calling "toggleLights()" is the chnage of the true to false and vice-versa, for the "lightsOn" property. 
    The result of calling "lightsStatus()" is the console logging of the value of the "lightsOn" property. 

    The result of calling "getSelf()" is the console logging the entire object instance in which the "getSelf()" method is 
    called. In this case, the returned object is the "train4" object. Notice that this object gets returned only with the 
    property("data") tjat was build using the "constructor()" function of the "Train" class. That's because all the methods
    on the Train classdo not "live" on any of the instance objects of the "Train" class, instead they live on the prototype
    as will be confirmed in the next paragraph. 
*/

