const canvas = document.getElementById('content');
const ctx = canvas.getContext('2d');
let x=0
const y = 150
const r = 20
const speed = 2

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI * 2)
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.closePath()
    x += speed

    if(x > canvas.width){
        x = -r
    }

    requestAnimationFrame(draw);
}
draw()