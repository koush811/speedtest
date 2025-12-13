const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let x = 0

function draw(){
    x += 2
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.arc(x, 160, 50, 0, 360)
    ctx.fillStyle = 'green';
    ctx.fill();
    requestAnimationFrame(draw)
    
}

draw()