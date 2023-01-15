/*
    Exercise: Web page content update: 

        In this reading, you will learn how to capture user input and process it. You'll be introduced to a simple example
        that demonstrates how to manipuate information displayed based on user input. 

    To capture user input, you can use the built-in "prompt()" method, like this: 
*/

// let answer = prompt('What is your name?'); 

/*
    Once you have the user-provided input inside the "answer" variable, you can manipulate it anyway you need to. 
    For example, you can output type-in information to the screen, as an "<h1>" HTML element. 

    Here's how you'd do that: 
*/

// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerHTML = answer; 
//     document.body.innerText = ''; 
//     document.body.appendChild(h1); 
// }

/*
    This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not the most
    efficient approach, especially in more complex scenarios. 

    This is where HTML forms come in. 

    You can doe a script which will take an input from an HTML form and display the text taht a user types in on the screen. 

    Here's how this is done. 

    You'll begin by coding out a "test solution" to the task at hand: 
*/

// creating 'h1' variable that creates "H1 heading tag"
var h1 = document.createElement('h1'); 
// Creating the text that will be stored inside the "H1 heading tag" 
h1.innerText = 'Type into the input to make this text change'; 

// creating the an "input" ?? element and storing it inside the "input" variable
var input = document.createElement('input');
// setting the attributes of the "input" variable
input.setAttribute('type', 'text'); 

document.body.innerText = ''; 
document.body.appendChild(h1); 
document.body.appendChild(input); 

/*
    So, you're essentially doing the same thing that you did before, only, this time you're also dynamically adding the 
    "input" element, and you're setting its HTML "type" attribute to "text". That way, when you start typing inot it, the
    letters will be showing in the "h1" element above. 

    However, you're not there quite yet. At this point, the code above, when you run on a live website, will add the "h1"
    element with the text "Type into the input to make this text change", and an empty input form field under it. 

    You can try this code out yourself, for example, by pointing your browser for the "example.com" website, and running the
    above code in the console.

    The next thing that you need to do is: set up an event listener. The event you're listening for is the "change" event
    In this case, the change event will fire after you've typed into the input and pressed the ENTER key. 

    Here's your update code:
*/

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText= ''; 
document.body.appendChild(h1); 
document.body.appendChild(input); 

input.addEventListener('change', function() {

    console.log(input.value)
})

/*
    After this update, whatever you type into the input, after pressing the ENTER key, will be shown as the text inside 
    the "h1" element. 
    
    Although this completes this lesson item, it's important to note that combining the DOM manipulation and event 
    handling allows for some truly remarkable interactive websites. 
*/