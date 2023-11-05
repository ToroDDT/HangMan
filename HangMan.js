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

DOM.start.addEventListener("click", () =>{
    updateDisplay()
})

DOM.button.addEventListener("click", storeUserInput)

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
                removeItem()
            }
        }
        removeItem()
    }