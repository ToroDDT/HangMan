let DOM = {
    button : document.getElementById("button"),
    letterBank : document.getElementById("letter-bank"),
    alphabet : document.getElementById("alphabet"),
    start : document.getElementById("start"),
    restart : document.getElementById("restart")
}


DOM.start.addEventListener("click", () =>{
    determineWord()
    
})
DOM.button.addEventListener("click", storeUserInput)

function storeUserInput () {
    let letterList = [] 
    let letterChosen = []
    let input = document.getElementById("user-answer");
    let userAnswer = input.value
    letterList.push(userAnswer)
    letterChosen.push(userAnswer)
    console.log(letterChosen)
    determineLetterMatches()
    return {letterList, letterChosen}
}


function determineWord () {
    let words = {
        wordOne: "love",
        wordTwo: "people",
        wordThree: "power",
        wordFour: "python",
        wordFive: "peace",
        wordSix: "the",
        wordSeven: "war",
        wordEight: "russia"
    }
    let wordList = Object.values(words);
    let randomWord = wordList[(Math.floor(Math.random() * wordList.length))]
    let randomWordArray = randomWord.split("")
    console.log(randomWord)
    updateDisplay(randomWordArray)
    return {randomWordArray}
}

function getAllIndexes (arr, val) {
    let index = [], i = -1;
    while((i = arr.indexOf(val, i = 1)) != -1){
        index.push(i)
    }
    return index
}

function determineLetterMatches () {
    for (let i = 0; i <randomWordArray.length; i++){
        if (randomWordArray[i] == letterChosen.toString()){
            addLettertoDisplay()
            remove()
        }
        else {
            remove()
        }
    }
}

function updateDisplay (randomWordArray) {
    let A = randomWordArray
    console.log(A)
   
    for (let i = 0; i < A.length; i++){
    const span = document.createElement("span")
     DOM.letterBank.appendChild(span)
    }
     
}


function addLettertoDisplay () {
    let indexesOfAllElement = getAllIndexes(randomWordArray, letterChosen()) 
    for (let i = 0; i < indexesOfAllElement.length; i++) {
        DOM.letterBank.children[i].innerHTML = letterChosen.toString()
 }

}

function removeLetter () {
    let alphabetChildren = DOM.alphabet.children
    for (let i = 0; i < alphabetChildren.length; i++ ){
        if(alphabetChildren[i].text == letterChosen){
            alphabetChildren[i].style.backgroundColor = "red"
        }
    }
}





    