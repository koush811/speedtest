const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    if(text.textContent == "ナイトモード"){
        text.textContent = "ライトモード"
        text.style.color = "#000"
        document.body.style.backgroundColor = "white"
    }
    else if(text.textContent == "ライトモード"){
        text.textContent = "ナイトモード"
        text.style.color = "#FFF"
        document.body.style.backgroundColor = "black"
    }
})
