ulepszacze = new Map();
drop = new Map();

toggled = new Map();

function setDropUlepszacze(where, _drop, _ulepszacze){
    ulepszacze.set(where, _ulepszacze);
    drop.set(where, _drop);
}

function setTo(to) {
    selections = document.getElementsByClassName("menu-selection");
    
    for(i = 0; i < selections.length; i++) {
        if(selections[i].id == to)
            selections[i].style.display = "block";
        else
            selections[i].style.display = "none";
    }
}

function toggle(what) {
    toToggle = document.getElementById(what);
    spoilerToggle = document.getElementById("spoiler-" + what);
    
    spoilerToggle.innerHTML = (spoilerToggle.innerHTML == "[+]" ? "[-]" : "[+]");
    
    toToggle.style.display = (toToggle.style.display == "none" ? "block" : "none");
}

function toggleL(what) {
    toToggle = document.getElementById(what);
    spoilerToggle = document.getElementById("spoiler-" + what);
    
    spoilerToggle.innerHTML = (spoilerToggle.innerHTML == "[+]" ? "[-]" : "[+]");
    
    toToggle.style.display = (toToggle.style.display == "none" ? "block" : "none");
    
    temp = "";
    
    if(!toggled.has(what)) {
        toggled.set(what, true);
        temp += "<ol class=\"list\">"
        for(i = 0; i < drop.get(what).length; i++)
        {
            temp += "<li>" + l_itemy[drop.get(what)[i]] + "</li>";     
        }
        temp += "<li>";
        temp += "<div class=\"spoiler-button\" id=\"spoiler-" + what + "-ulepszacze\" onclick=\"toggle('" + what + "-ulepszacze');\">[+]</div> Ulepszacze";
        temp += "<div class=\"spoiler\" id=\"" + what + "-ulepszacze\" style=\"display: none\">";
        temp += "<ol>";
        for(i = 0; i < ulepszacze.get(what).length; i++)
        {
            temp += "<li>" + l_ulepszacze[ulepszacze.get(what)[i]] + "</li>";
        }
        temp += "</ol></div></li></ol>";
    }
    
    toToggle.innerHTML += temp;
}
            
setDropUlepszacze("metin-cierpienia",
//Drop
[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//Ulepszacze
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

setDropUlepszacze("metin-walki", 
//Drop
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//Ulepszacze
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

setDropUlepszacze("metin-bitwy", 
//Drop
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//Ulepszacze
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

setDropUlepszacze("metin-chciwosci", 
//Drop
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
//Ulepszacze
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 22, 17, 23, 18, 24, 19, 20, 21]);