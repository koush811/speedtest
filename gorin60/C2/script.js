const input = document.getElementById('input')


input.addEventListener('input',()=>{
    number = input.value
    if(number%2 === 1){
        document.getElementById('answer').textContent = number
    }
    
})






