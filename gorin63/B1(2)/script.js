const display = document.getElementById("timer")
const startbtn = document.getElementById('start')
const stopbtn = document.getElementById('stop')
const resetbtn = document.getElementById('reset')

let timelet 
let prevtime = 0
let intervalId 
let time =0
let isStarted = false

startbtn.addEventListener('click',()=>{
    if(isStarted)return;
    isStarted = true
    
    prevtime = Date.now()
    intervalId = setInterval(()=>{
        time += Date.now() - prevtime
        temp = time
        const minute = String(Math.floor(temp / (60 * 1000))).padStart(2,"0");
        temp -= minute * 60*1000
        const second = String(Math.floor(temp / 1000)).padStart(2,"0")
        temp -= second*1000
        const msecond = String(Math.floor(temp/10)).padStart(2,"0")
        display.textContent = `${minute}:${second}:${msecond}`
        prevtime = Date.now()
        console.log(time);
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
    display.textContent = "00:00:00"
})



