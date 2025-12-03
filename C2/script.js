let time = 7
let text
text = setInterval(()=>{
    if(time>0){
        document.body.textContent = time
        time = time-1 
    }else{
        clearInterval(text)
        document.body.textContent = "finish"
    }
},1000)