let time = 0
let intervalId = null
const second = document.getElementById('second')

document.getElementById('start').addEventListener('click',()=>{
    intervalId = setInterval(()=>{
        time++
        const deg = (time%60) * 6
        second.style.transform = `rotate(${deg}deg)`
        console.log(time)
        document.getElementById('text').textContent = time;
    },1000)
})


document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(intervalId);
    time = 0
    second.style.transform = `rotate(0deg)`
    document.getElementById('text').textContent = time;
})






