const vr = document.getElementById('value-r').value
const vg = document.getElementById('value-g').value
const vb = document.getElementById('value-b').value
console.log(vr,vg,vb)


document.getElementById('color').style.backgroundColor = `rgba(${vr},${vg},${vb},1)`