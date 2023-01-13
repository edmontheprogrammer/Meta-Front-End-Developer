/*
    Exercise: Defensive Programming

    Defensive programming is all about assuming that all the arugments a function will receive are of the wrong type, the 
    wrong value or both. 

    In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before
    they happen, so as to make your function less likely to cause errors of faulty inputs. 

    How would you then refactor the function given below with defensive programming in mind? 

    For this exercise, let's make sure that both the argments that are passed in satify the following criteria: 

        * The length of the "word" parameter cannot be less than "2"
        * The lenght of the "match" parameter must be "1"
        * The type of both the "word" and the "match" paramaters must be string. 
    
    You will use the code below to complete your task: 
*/

function letterFinder(word, match) {

    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1

    if (condition1 && condition2) {
            for (i = 0; i < word.length; i++) {

                if(word[i] == match) {
                    // if the current character at position i in the word is equal to the match
                    console.log('Found the ', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }

        } else {
            console.log("Please pass correct arguments to the function")
        }

    }



       