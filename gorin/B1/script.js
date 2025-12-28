const timer = document.getElementById('timer')
let time = 0
let prevtime = 0
let intervalID 
let isStart = false

document.getElementById('start').addEventListener('click',()=>{
    if(isStart)return;
    isStart = true
    prevtime = Date.now()
    intervalID = setInterval(()=>{
        time += Date.now() - prevtime
        temp = time
        let minute = String(Math.floor(temp / (60*1000))).padStart(2 ,"0")
        temp -= minute*(60*1000)
        let second = String(Math.floor(temp / 1000)).padStart(2,"0")
        temp -= second * 1000
        let msecond = String(Math.floor(temp / 10)).padStart(2,"0")
        timer.textContent = `${minute}:${second}:${msecond}`
        prevtime = Date.now()
    },10)
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalID)
    isStart = false
})

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(intervalID)
    time = 0
    isStart = false
    timer.textContent = "00:00:00"
})

