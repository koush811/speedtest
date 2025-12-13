const back = document.getElementById('back')
const square = document.getElementById('square')
let x = 0
let y = 0


back.addEventListener('mousemove',(e)=>{
    x = e.clientX
    y = e.clientY
    console.log(x,y)
    square.style.left = `${x}px`
    square.style.top = `${y}px`
})