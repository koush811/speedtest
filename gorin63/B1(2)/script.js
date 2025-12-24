const timer = document.getElementById('timer')

let time = 0
let prevtime = 0
let intervalId 
let isStarted = false

document.getElementById('start').addEventListener('click',()=>{
    if(isStarted)return
    isStarted = true
    prevtime = Date.now()
    intervalId = setInterval(()=> {
        time += Date.now() - prevtime
        temp = time
        const minute = String(Math.floor(temp / (60*1000))).padStart(2,"0")
        temp -= minute * (60*1000)
        const second = String(Math.floor(temp / 1000)).padStart(2,"0")
        temp -= second * 1000
        const msecond = String(Math.floor(temp / 10)).padStart(2,"0")
        prevtime = Date.now()
        timer.textContent = `${minute}:${second}:${msecond}`
        console.log(second)
    },10) 
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalId)
    isStarted = false
})

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(intervalId)
    time = 0
    timer.textContent = "00:00:00"
    isStarted = false
})


