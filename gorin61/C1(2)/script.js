const input = document.getElementById('input')
const text = document.getElementById('text') 

document.getElementById('serch').addEventListener('click',()=>{
    keyward = input.value
    if(keyward == "")return;

    const origintext = text.textContent
    
    let newtext = origintext.replaceAll(keyward,`<span>${keyward}</span>`)
    console.log(newtext);

    text.innerHTML = newtext;
 
    document.querySelectorAll('span').forEach((span) => {
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        span.style.backgroundColor = `rgb(${r},${g},${b})`
        console.log(1);
    }) 

})
    
