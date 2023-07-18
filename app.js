let btn = document.querySelector(".btn")
let c1 = document.querySelector(".clothes1")
let input = document.querySelector(".input")
let c2 = document.querySelector(".clothes2")
let c3 = document.querySelector(".clothes3")
let c4 = document.querySelector(".clothes4")
let c5 = document.querySelector(".clothes5")

function Func(){
    let val = input.value
    if(val <= 0){
        c1.style.display = "block"
        c2.style.display = "none"
        c3.style.display = "none"
        c4.style.display = "none"
        c5.style.display = "none"
    } else if(val >= 0 && val <= 10){
        c1.style.display = "none"
        c2.style.display = "block"
        c3.style.display = "none"
        c4.style.display = "none"
        c5.style.display = "none"
    } else if(val >= 10 && val <= 20){
        c1.style.display = "none"
        c2.style.display = "none"
        c3.style.display = "block"
        c4.style.display = "none"
        c5.style.display = "none"
    } else if(val >= 20 && val <= 30){
        c1.style.display = "none"
        c2.style.display = "none"
        c3.style.display = "none"
        c4.style.display = "block"
        c5.style.display = "none"
    } else if(val >= 30){
        c1.style.display = "none"
        c2.style.display = "none"
        c3.style.display = "none"
        c4.style.display = "none"
        c5.style.display = "block"
    } else {
        c1.style.display = "none"
        c2.style.display = "none"
        c3.style.display = "none"
        c4.style.display = "none"
        c5.style.display = "none"
    }
}

btn.addEventListener("click", Func)
window.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        Func()
    } 
})

