const hero = document.getElementById('hero')
const text = document.getElementById('text')

hero.addEventListener('mousemove',(e)=>{
    const {offsetWidth: width, offsetHeight: height} = hero
    const {offsetX:x, offsetY: y} = e

    const movex = (x - width/2)/10
    const movey = (y - height/2)/10
    console.log(movex,movey)
    text.style.textShadow = `
        ${movex}px ${movey}px 5px rgba(255, 0, 225, 1),
        ${-movex}px ${-movey}px 5px rgba(225, 255, 0, 1),
        ${movex}px ${-movey}px 5px rgba(0, 225, 225, 1)
    `;
})

hero.addEventListener('mouseleave',()=>{
    text.style.textShadow = "none"
})