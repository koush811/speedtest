const square = document.getElementById('square')
document.addEventListener("mousemove" ,(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    square.style.left=`${x}px`
    square.style.top=`${y}px`
    console.log(x,y)
})