/*const img = document.getElementById('img')
const mouse = document.getElementById('hilight')
let size = 150;
let isActive = false;
let x = 0;
let y = 0;

img.addEventListener('mousemove',(e)=>{
    const rect = img.getBoundingClientRect();
    console.log('e.clientX')
    x = Math.floor((e.clientX - rect.left)/10)*10;
    y = Math.floor((e.clientY - rect.left)/10)*10;
    console.log(x,y)
    mouse.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) ${size}px)`;
})


img.addEventListener("mouseenter", () => {
  isActive = true;
  hilight.style.display = "block";
});

img.addEventListener("mouseleave", () => {
  isActive = false;
  hilight.style.display = "none";
});


img.addEventListener('wheel', function(e){
      if (!isActive) return;
      e.preventDefault();
      const delta = Math.sign(e.deltaY); 
      size += delta * 10;
      size = Math.max(10, size);
      mouse.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) ${size}px)`;
})*/

const pointer = document.getElementById('pointer')
const img = document.getElementById('img')
let x = 0
let y = 0
let isActive = false
let size = 150

img.addEventListener('mousemove',(e)=>{
  const rect = img.getBoundingClientRect()
  x = e.clientX 
  y = e.clientY
  console.log(x,y)
  pointer.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) ${size}px)`;
})

img.addEventListener('mouseenter',(e)=>{
  isActive = true;
  pointer.style.display = "flex"
})

img.addEventListener('mouseleave',(e)=>{
  isActive = false
  pointer.style.display = "none"
})

img.addEventListener('wheel',(e)=>{
  if(isActive === false) return
  e.preventDefault()
  const delta = Math.sign(e.deltaY)
  size = size + delta * 10
  size = Math.max(10,size)
  pointer.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.75) ${size}px)`;
})