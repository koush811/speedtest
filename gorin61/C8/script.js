const max = 10
const size = 60
const bubles = []

function Color() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
 }

function createbuble(){
    if(bubles.length >= max){
        const zerobubles = bubles.shift()
        zerobubles.remove()
    }
    const buble = document.createElement('div')
    buble.className = "buble";
    buble.style.backgroundColor = "red"
    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    buble.style.left = Math.floor(Math.random() * maxX) + "px"
    buble.style.top = Math.floor(Math.random() * maxY) + "px"
    buble.style.backgroundColor = Color()


    document.body.appendChild(buble);
    bubles.push(buble)
    
    
}

for(let i = 0;i < max; i++){
    createbuble()
}

const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    createbuble()
})