var iframe = document.createElement('iframe')
document.body.style.overflow = "hidden"
iframe.onload = function() { iframe.width = 0; iframe.height = 0; }
iframe.src = "https://www.youtube.com/embed/_W1P7AvV17w?autoplay=1&version=3&loop=1&playlist=_W1P7AvV17w"
iframe.setAttribute("frameborder", "0")
iframe.setAttribute("allow", "autoplay")
iframe.style.position = "absolute";
iframe.style.top = "1079px";
document.body.appendChild(iframe)