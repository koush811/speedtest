const startbtn = document.getElementById('start')
const stopbtn = document.getElementById('stop')
const resetbtn = document.getElementById('reset')
const timedisplay = document.getElementById('time')
let prevtime = 0
let intervalId = null
let time = 0
isStarted = false

startbtn.addEventListener('click',()=>{
    if(isStarted)return;
    isStarted = true
    prevtime = Date.now();
    intervalId = setInterval(() =>{
        time += Date.now() - prevtime
        console.log(time)
        let temp = time
        const min = String(Math.floor(temp / (60*1000) )).padStart(2,"0")
        temp -= min * 60*1000;
        const second = String(Math.floor(temp / 1000)).padStart(2,"0")
        temp -= second * 1000;
        const msecond = String(Math.floor(temp/10)).padStart(2,"0")
        timedisplay.textContent = `${min}:${second}:${msecond}`
        prevtime = Date.now()
    },10)
})

stopbtn.addEventListener('click',()=>{
    clearInterval(intervalId)
    isStarted = false
})

resetbtn.addEventListener('click',()=>{
    clearInterval(intervalId)
    time = 0
    isStarted = false
    timedisplay.textContent = '00:00:00' 
})
















