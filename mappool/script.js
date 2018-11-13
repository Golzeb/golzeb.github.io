function generate()
{
    elements = document.getElementsByClassName("mapset");
                
    for(i = 0; i < elements.length; i++) {
        backgroundString = '\'https://assets.ppy.sh/beatmaps/' + elements[i].classList.item(1) + '/covers/cover.jpg\'';
        elements[i].innerHTML = '<div class="background-image" style="background-image: url(' + backgroundString + ');"></div>' + elements[i].innerHTML;         
        var a = document.createElement("a");
        var parent = elements[i].parentNode;

        a.setAttribute("href", 'https://osu.ppy.sh/beatmapsets/' + elements[i].classList.item(1) + '#osu')

        parent.insertBefore(a, elements[i])
        a.appendChild(elements[i])
    }
}