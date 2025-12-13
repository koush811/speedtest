const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let x = 0
let y = 0

let drow = false

canvas.addEventListener('mousedown',(e)=>{
    drow = true
    x = e.clientX
    y = e.clientY
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(x,y)
   
})

canvas.addEventListener('mousemove',(e)=>{
    if(!drow)return
    x = e.clientX
    y = e.clientY
    ctx.lineTo(x, y);
    ctx.stroke()
})

canvas.addEventListener('mouseup',(e)=>{
    drow = false
})

const colors = document.querySelectorAll('button')

colors.forEach(function(color){
    const button = document.getElementById(color.id) 
    button.addEventListener('click',()=>{
        ctx.strokeStyle = color.id
    })
    
})

const savejpg = document.getElementById('jpg')
const savepng = document.getElementById('png')

savejpg.addEventListener('click',()=>{
    const jpgimg = canvas.toDataURL("image/jpeg")
    const link = document.createElement('a')
    link.href = jpgimg
    link.download = "canvas.jpg"
    link.click()
})

savepng.addEventListener('click',()=>{
    const pngimg = canvas.toDataURL("image/png")
    const link = document.createElement('a')
    link.href = pngimg
    link.download = "canvas.png"
    link.click()
})

