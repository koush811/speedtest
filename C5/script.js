 const tex = document.getElementById('text')

document.getElementById('btn').addEventListener("click",()=>{
    if(tex.textContent == "ナイトモードテスト"){
        tex.textContent = "ライトモードテスト"
        document.body.style.color = "#000"
        document.body.style.background = "#FFF"
    }else if(tex.textContent == "ライトモードテスト"){
        tex.textContent = "ナイトモードテスト"
        document.body.style.color = "#FFF"
        document.body.style.background = "#000"
    }
})
