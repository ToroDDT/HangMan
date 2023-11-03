let DOM = {
    button : document.getElementById("button"),
    letterBank : document.getElementById("letter-bank"),
    alphabet : document.getElementById("alphabet")
}



DOM.button.addEventListener("click", storeUserInput)

function storeUserInput () {
    let letterList = [] 
    let letterChosen = []
    let input = document.getElementById("user-answer");
    let userAnswer = input.value
    letterList.push(userAnswer)
    letterChosen.push(userAnswer)
    return {letterList, letterChosen}
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
    let randomWordArray = randomWord.split("")
    updateDisplay(randomWordArray)
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

    const span = document.createElement("span")
    for (let i = 0; i < randomWordArray.length; i++){
        document.getElementById("letter-bank").appendChild(span)
    }
}


function addLettertoDisplay () {
    for (let i = 0; i < indexes.length; i++) {
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



let indexesOfAllElement = getAllIndexes(randomWord, letterChosen()) 
for (let i = 0; i < randomWord.length; i++){
    if(randomWord[i] == letterChosen.toString()){
         for (i = 0; i < indexesOfAllElement.length; i++) {

            break;   
         }
          
    }
    return {indexesOfAllElement}
} 
    