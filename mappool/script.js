function generate()
{
    elements = document.getElementsByClassName("mapset");
    
    console.log(elements);

    for(i = 0; i < elements.length; i++) {
        backgroundString = 'https://assets.ppy.sh/beatmaps/' + elements[i].classList.item(1) + '/covers/cover.jpg';
        background = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("' + backgroundString + '");'; 
        elements[i].setAttribute("style", "background: " + background + "; background-size: cover;")

        var a = document.createElement("a");
        var parent = elements[i].parentNode;

        a.setAttribute("href", 'https://osu.ppy.sh/beatmapsets/' + elements[i].classList.item(1) + '#osu')

        parent.insertBefore(a, elements[i])
        a.appendChild(elements[i])
    }
}
