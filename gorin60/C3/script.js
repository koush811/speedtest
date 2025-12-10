const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

function draw(){
    canvas.addEventListener('mousemove',(e)=>{
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        ctx.fillStyle = "red"
        ctx.fillRect(x, y, 5, 5)
    })
}

draw()