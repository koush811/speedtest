const input = document.getElementById('input')
const color = document.getElementById('color')

input.addEventListener('input',()=>{
    const value = input.value.trim()
    const hex =  /^#([0-9a-fA-F]{6})$/;
    const rgb =   /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

    if(hex.test(value)){
        let hexv = value.match(hex)[1];
        let r = parseInt(hexv.substring(0, 2), 16);
        let g = parseInt(hexv.substring(2, 4), 16);
        let b = parseInt(hexv.substring(4, 6), 16);
        color.textContent = `RGB: rgb(${r}, ${g}, ${b})`
        color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }else if(rgb.test(value)){
        let [,r,g,b] = value.match(rgb)
        r = Number(r);
        g = Number(g);
        b = Number(b);
        if ([r, g, b].some(x => x < 0 || x > 255)) {
        color.textContent = 'エラー';
        return;
        }
        let hexv = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        color.textContent = `HEX: ${hexv}`;
        color.style.backgroundColor = `${hexv}`
    } else {
        color.textContent = 'エラー';
    }

})