const increaseButtonElement = document.querySelector("#increase")
const decreaseButtonElement = document.querySelector("#decrease")
const progessBarElement = document.querySelector("#underProgessBar")
const containerElement = document.querySelector("#container")
let percent = 50
let opacity = 0.5
increaseButtonElement.addEventListener("click",function(event){
    event.preventDefault()
    if (percent < 100) {
        percent += 10
        opacity += 0.1
        progessBarElement.style.width = percent + "%"
        containerElement.style.opacity = opacity
    }
})
decreaseButtonElement.addEventListener("click",function(event){
    event.preventDefault()
    if (percent > 0) {
        percent -= 10
        opacity -= 0.1
        progessBarElement.style.width = percent + "%"
        containerElement.style.opacity = opacity
    }
})