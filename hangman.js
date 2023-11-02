





let DOM = {
    button : document.getElementById("button")
}



button.addEventListener("click", storeUserInput)

function storeUserInput () {
    let letterList = [] 
    let letterChosen = []
    let input = document.getElementById("user-answer");
    let userAnswer = input.value
    letterList.push(userAnswer)
    letterChosen.push(userAnswer)
    return letterList
}



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

function getAllIndexes () {
    let index = [], i = -1;
    while((i = arr.indexOf(val, i = 1)) != -1){
        index.push(i)
    }
    return index
}

function determineLetterMatches () {
    // first determine userInput array
    for (let i = 0; i < randomWord.length; i++){
        if(randomWord[i] == letterList.toString()){
                
        }
    }
    // compare userInput array with splitWord variable array
    // if an index mathces 
    // append string to a specified index in div element 
}

function updateDisplay (randomWord) {
    let splitWord = randomWord.split()
    const span = document.createElement("span")
    for (let i = 0; i < splitWord.length; i++){
        document.getElementById("letter-bank").appendChild(span)
    }
}

function 

// how will we get input from user 
// create input box 
// create button 
// create event listener for button clicked
// create function that takes value from text box 
// store value from text box in userChoice variable 

// determine if user choice is correct 
// create a text box for user to input letter
//select textbox by id and store in a varaible 
// get value from textbox and store in a varaiable 
// take userChoice 
// loop through each character in split word and compare with userChoice 
// if splitWord[i] == userChoice 
// display letter at 
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

