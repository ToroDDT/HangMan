const DOM = {
    button : document.getElementById("button"),
    letterBank : document.getElementById("letter-bank"),
    alphabet : document.getElementById("alphabet"),
    start : document.getElementById("start"),
    restart : document.getElementById("restart"),
    input: document.getElementById("user-answer"),
    guesses : document.getElementById("amount"),
    restart : document.getElementById("restart")

}

let randomWordArray = [];
let letterList = [] 
let letterChosen = []
let counter = 7;

DOM.restart.addEventListener("click", () => {
    randomWordArray = [];
    letterList = [];
    letterChosen = []
    counter = 7
    DOM.guesses.innerHTML = 7
    for (let i = 0; i < DOM.alphabet.children.length; i++){
        DOM.alphabet.children[i].style.backgroundColor = "powderblue"
    }
    while (DOM.letterBank.lastChild){
        DOM.letterBank.removeChild(DOM.letterBank.lastChild)
    }
})

DOM.start.addEventListener("click", () => {
    updateDisplay()
})

function updateDisplay () {
    const {randomWordArray} = createWord()
    for (let i = 0; i < randomWordArray.length; i++){
        const span = document.createElement("span")
         DOM.letterBank.appendChild(span)
    }
}


DOM.button.addEventListener("click", storeUserInput)

function createWord () {
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
    randomWordArray = randomWord.split("")
    console.log(randomWordArray)
  
    return {randomWordArray}
    
}

function storeUserInput () {
    letterChosen = [];
    let userAnswer = DOM.input.value;
    letterList.push(userAnswer);
    letterChosen.push(userAnswer);
    DOM.input.value = ""
    
    
    compareLetters()
}

function compareLetters () {
  const testMatch = (element) => element == letterChosen.toString();
  if(randomWordArray.some(testMatch)){
        addletter()
  } else {
    decrement()
  }
  removeItem()
}
function getAllIndexes(arr, val) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
    }

function addletter () {
        let indexesOfAllElement = getAllIndexes(randomWordArray, letterChosen.toString()) 
        console.log(indexesOfAllElement)
        for (let i = 0; i < indexesOfAllElement.length; i++){
            let x = indexesOfAllElement[i]
            DOM.letterBank.children[x].innerHTML = letterChosen.toString()
        }
        determineOutcomeofGame()
    }

    function removeItem () {
        let string = letterChosen.toString()
        let upperCaseWord = string.toUpperCase()
        console.log(upperCaseWord)
        let alphabetChildren = DOM.alphabet.children
        for (let i = 0; i < alphabetChildren.length; i++ ){
            if(alphabetChildren[i].textContent == upperCaseWord){
                alphabetChildren[i].style.backgroundColor = "red"
            }
        }
        
    }

function decrement () {
    counter--
    DOM.guesses.innerHTML = counter
}

function determineOutcomeofGame () {
  if (counter == 0){
    alert("you lost")
  }
  if (randomWordArray.toString() == letterList.toString()){
    alert("you won")
  }
}
