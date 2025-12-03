document.addEventListener("DOMContentLoaded",function(){
    const mouse = document.getElementById("square");
    document.addEventListener("mousemove",function(e){
        const x = e.clientX;
        const y = e.clientY;
        mouse.style.opacity = "1";
        mouse.style.transform = "translate("+ x +"px" + y + "px)";
    })
})