// build a hangman Game 
// what are the different aspects of the hangman game 
// 



// the Hangman game is about guessing a word 
// player guesses each letter of the word 
// if the player guesses wrong draw a part of body
//

// create a list of words 
// create a variable 
// assign an object containing strings of phrases 

// inputs: ask player with a prompt 
// create variable to store answer from player 
// if player letter matches a letter from word 
// display letter in specified div 
// remove letter from list of letters in the alphabet div 





function determineWord () {
    let words = {
        wordOne: "love",
        wordTwo: "people",
        wordThree: "power",
        wordFour: "python",
        wordFive: "peace"
    }
    let wordList = Object.values(words);
    let randomWord = wordList[(Math.floor(Math.random() * wordList.length))]
    updateDisplay(randomWord)
}

function updateDisplay (randomWord) {
    let splitWord = randomWord.split()
    const span = document.createElement("span")
    for (let i = 0; i < splitWord.length; i++){
        document.getElementById("letter-bank").appendChild(span)
    }
}
//start game 
// create funciton for starting the game 
// create game state 
// convert object of words into a array of strings 
// store new array of strings into a variable called list of words 
// choose a string in the array at random 
// store string chosen in variable called wordChosen
// return wordChosen 
// call function 

//within a container 
// create a function named determine amount of spaces for each letter of the word chosoen 
// split word into an array of letters 
// store array of characters into a variable called characterArr
// determine length of character array 
// store value of the length in characterlength
// return characterLength 
//


// 

