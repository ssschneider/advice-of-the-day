const displayAdvice = document.querySelector(".advice-place")
const newAdvice = document.querySelector("button")

function generateAdvice () {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(showAdvice => {
        displayAdvice.innerText = showAdvice.slip.advice
    })
}

generateAdvice ()

newAdvice.addEventListener ("click", () => {
    generateAdvice ()
})