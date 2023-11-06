const DOM = {
    button : document.getElementById("button"),
    letterBank : document.getElementById("letter-bank"),
    alphabet : document.getElementById("alphabet"),
    start : document.getElementById("start"),
    restart : document.getElementById("restart"),
    input: document.getElementById("user-answer")
}

let randomWordArray = [];
let letterList = [] 
let letterChosen = []

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
    console.log(letterChosen)
    
    compareLetters()
}

function compareLetters () {
    for (let i = 0; i < randomWordArray.length; i++){
            if (randomWordArray[i] == letterChosen.toString()){
                console.log("works")
                
                addletter()
            } else {
               amount = decrement()
            }
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
        console.log(letterChosen)
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
        let counter = 7
        return function decrementCounter () {
            DOM.guesses.innerHTML = counter--
        }
    }