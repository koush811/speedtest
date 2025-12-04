let x = 0
const y = 100
const width = 50
const height = 50
const speed = 2

const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    x += speed
    if(x > canvas.width){
        x =- width
    }
    ctx.fillStyle = 'green'
    ctx.fillRect(x, y, width, height)
    requestAnimationFrame(draw);
}
draw()