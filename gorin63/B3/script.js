const text = document.getElementById('text')
const hero = document.getElementById('hero')
const walk = 40 
const width = 500
const height = 300

hero.addEventListener('mousemove',(e)=>{
    x = e.clientX 
    y = e.clientY 
    let xwalk = Math.round((x/width)*walk- walk/2)
    let ywalk = Math.round((y/height)*walk-walk/2)
    text.style.textShadow=`${xwalk}px ${ywalk}px 0 cyan,${-xwalk}px ${-ywalk}px 0 yellow,${xwalk}px ${-ywalk}px 0 magenta`
})
