var iframe = document.createElement('iframe')
document.body.style.overflow = "hidden"
iframe.onload = function() { iframe.width = 0; iframe.height = 0; }
iframe.src = "https://www.youtube.com/embed/xe4iTkOHfEM?autoplay=1&version=3&loop=1&playlist=xe4iTkOHfEM"
iframe.setAttribute("frameborder", "0")
iframe.setAttribute("allow", "autoplay")
document.body.appendChild(iframe)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function a() {
    document.getElementById("banner").style.opacity = 0.0;
    document.getElementById("bg").style.filter = "brightness(80%)";
    await sleep((Math.random() * (200 - 50))+ 50);
    document.getElementById("banner").style.opacity = 1.0;
    document.getElementById("bg").style.filter = "brightness(110%)";
    await sleep((Math.random() * (200 - 50))+ 50);
    document.getElementById("banner").style.opacity = 0.25;
    document.getElementById("bg").style.filter = "brightness(90%)";
    await sleep((Math.random() * (200 - 50))+ 50);
    document.getElementById("banner").style.opacity = 1.0;
    document.getElementById("bg").style.filter = "brightness(110%)";
}

(function loop() {
    var rand = Math.round(Math.random() * (12000 - 3000)) + 3000;
    setTimeout(function() {
            a();
            loop();  
    }, rand);
}());