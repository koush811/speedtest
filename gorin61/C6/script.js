const mouse = document.getElementById('mouse')
const area = document.getElementById('area')
let x = 0
let y = 0

area.addEventListener('mousemove',(e)=>{
    x = e.clientX
    y = e.clientY

    mouse.style.top = `${y}px`
    mouse.style.left = `${x}px`

})

mouse.addEventListener('mousedown',()=>{
    mouse.style.width = "50px"
    mouse.style.height = "50px"
})

mouse.addEventListener('mouseup',()=>{
    mouse.style.width = "10px"
    mouse.style.height = "10px"
})

mouse.addEventListener('click',()=>{
    mouse.style.backgroundColor = "#000"
    
})