const img = document.getElementById('img')
let size = 150;
let isActive = false;

img.addEventListener('mousemove',(e)=>{
    const rect = img.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left)/10)*10;
    const y = Math.floor((e.clientY - rect.left)/10)*10;
    console.log(x,y)
    const mouse = document.getElementById('hilight')
    mouse.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) 150px)`;
    
})

img.addEventListener("mouseenter", () => {
  isActive = true;
  hilight.style.display = "block";
});

img.addEventListener("mouseleave", () => {
  isActive = false;
  hilight.style.display = "none";
});



document.activeElement('wheel',function(e){
    if (!isActive) return;
    const delta = Math.sign(e.deltaY); 
    size += delta * 10;
    size = Math.max(10, size);
    mouse.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) ${size}px)`;
})
