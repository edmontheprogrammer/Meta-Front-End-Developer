/*
    Exercise: Practice with functions: 

        Your task in this exercise is to code a function which will be able to take a word and locate the position of a 
    chosen letter in that given word. 

    Task 1: 
        Write a function named letterFinder that accepts two parameters: word and match
*/

function letterFinder(word, match) {

    for (var i = 0; i < word.length ; i++) {
        if (word[i] == match) {
            console.log("The letter is at position ", i);
            console.log(word[i]); 
            break;
        }    else {
            console.log("No match found! ");
        }
     
    } 

}



letterFinder("Rwanda", "P");