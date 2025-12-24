document.querySelector('button').addEventListener('click',()=>{
    const number = ["1","2","3"]
    const big = ["A","B","C"]
    const small = ["a","b","c"]
    const kigou = ["(","$","+"]
    random = []
    for(let i = 0;i<3;i++){
        idx = Math.floor(Math.random() * 3)
        random += number[idx]
    }
    for(let i = 0;i<3;i++){
        idx = Math.floor(Math.random() * 3)
        random += big[idx]
    }
    for(let i = 0;i<3;i++){
        idx = Math.floor(Math.random() * 3)
        random += small[idx]
    }
    for(let i = 0;i<3;i++){
        idx = Math.floor(Math.random() * 3)
        random += kigou[idx]
    }
    console.log(random)
    const chars = random.split("")
    console.log(chars)
    let password = []
    for(let i = 0;i<12;i++){
        idx = Math.floor(Math.random() * 12)
        password += chars[idx]
    }
    console.log(password)
    document.getElementById('pass').textContent = password
})