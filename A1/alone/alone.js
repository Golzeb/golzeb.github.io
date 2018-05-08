var iframe = document.createElement('iframe')
document.body.style.overflow = "hidden"
iframe.onload = function() { iframe.width = 0; iframe.height = 0; }
iframe.src = "https://www.youtube.com/embed/xe4iTkOHfEM?autoplay=1&version=3&loop=1&playlist=xe4iTkOHfEM"
iframe.setAttribute("frameborder", "0")
iframe.setAttribute("allow", "autoplay")
document.body.appendChild(iframe)