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
            temp += "<li>" + drop.get(what)[i] + "</li>";     
        }
        temp += "<li>";
        temp += "<div class=\"spoiler-button\" id=\"spoiler-" + what + "-ulepszacze\" onclick=\"toggle('" + what + "-ulepszacze');\">[+]</div> Ulepszacze";
        temp += "<div class=\"spoiler\" id=\"" + what + "-ulepszacze\" style=\"display: none\">";
        temp += "<ol>";
        for(i = 0; i < ulepszacze.get(what).length; i++)
        {
            temp += "<li>" + ulepszacze.get(what)[i] + "</li>";
        }
        temp += "</ol></div></li></ol>";
    }
    
    toToggle.innerHTML += temp;
}
            
setDropUlepszacze("metin-cierpienia",
//Drop
["Zwój Błogosławieństwa", "Czerwona Mikstura(M)", "Niebieska Mikstura(M)", "Fioletowa Mikstura(Ś)", "Kamień Duszy +0", "Księga Taktyka (1)", "Księga Polimorfi (1)", "Księga Zapomnienia", "Peleryna Męstwa", "Dłoń Krytyka", "Dłoń Przebicia", "Zaczarowanie Przedmiotu (EXP)", "Zaczarowanie Przedmitu (PVP)", "Wzmocnienie Przedmiotu", "Teczka Kompetencji Magii", "Skrzynia Brońmistrza", "Skrzynia Zbrojmistrza", "Skrzynia Jubilerska", "Kufer Czaru", "Klucz Czaru"],
//Ulepszacze
["Włókno Prozaidowe", "Pudełko", "Klepsydra", "Sól Fizjologiczna", "Tętnica Niedźwiedzia", "Morela", "Kawałek Szpuli", "Matarasu", "Gliniak", "Podręczniki Kowalskie", "Biała Wstęga", "Zwierciadło", "Księga Zaklęć", "Zaklęcie Kielinowe", "Grzebień", "Drewniana Tarcza", "Chiński Maret", "Czarna Tabletka", "Czarysz", "Biała Nić", "Kawałek Szubienicy", "Kompas Słoneczny"]);

setDropUlepszacze("metin-walki", 
//Drop
["Zwój Błogosławieństwa", "Czerwona Mikstura(M)", "Niebieska Mikstura(M)", "Zielona Mikstura(M)", "Fioletowa Mikstura(Ś)", "Kamień Duszy +0", "Księga Taktyka (1)", "Księga Polimorfi (1)", "Księga Zapomnienia", "Peleryna Męstwa", "Dłoń Krytyka", "Dłoń Przebicia", "Zaczarowanie Przedmiotu (EXP)", "Zaczarowanie Przedmitu (PVP)", "Wzmocnienie Przedmiotu", "Teczka Kompetencji Magii", "Skrzynia Brońmistrza", "Skrzynia Zbrojmistrza", "Skrzynia Jubilerska", "Kufer Czaru", "Klucz Czaru"],
//Ulepszacze
["Włókno Prozaidowe", "Pudełko", "Klepsydra", "Sól Fizjologiczna", "Tętnica Niedźwiedzia", "Morela", "Kawałek Szpuli", "Matarasu", "Gliniak", "Podręczniki Kowalskie", "Biała Wstęga", "Zwierciadło", "Księga Zaklęć", "Zaklęcie Kielinowe", "Grzebień", "Drewniana Tarcza", "Chiński Maret", "Czarna Tabletka", "Czarysz", "Biała Nić", "Kawałek Szubienicy", "Kompas Słoneczny"]);

setDropUlepszacze("metin-bitwy", 
//Drop
["Zwój Błogosławieństwa", "Czerwona Mikstura(M)", "Niebieska Mikstura(M)", "Zielona Mikstura(M)", "Fioletowa Mikstura(Ś)", "Kamień Duszy +0", "Księga Taktyka (1)", "Księga Polimorfi (1)", "Księga Zapomnienia", "Peleryna Męstwa", "Dłoń Krytyka", "Dłoń Przebicia", "Zaczarowanie Przedmiotu (EXP)", "Zaczarowanie Przedmitu (PVP)", "Wzmocnienie Przedmiotu", "Teczka Kompetencji Magii", "Skrzynia Brońmistrza", "Skrzynia Zbrojmistrza", "Skrzynia Jubilerska", "Kufer Czaru", "Klucz Czaru"],
//Ulepszacze
["Włókno Prozaidowe", "Pudełko", "Klepsydra", "Sól Fizjologiczna", "Tętnica Niedźwiedzia", "Morela", "Kawałek Szpuli", "Matarasu", "Gliniak", "Podręczniki Kowalskie", "Biała Wstęga", "Zwierciadło", "Księga Zaklęć", "Zaklęcie Kielinowe", "Grzebień", "Drewniana Tarcza", "Chiński Maret", "Czarna Tabletka", "Czarysz", "Biała Nić", "Kawałek Szubienicy", "Kompas Słoneczny"]);

setDropUlepszacze("metin-chciwosci", 
//Drop
["Zwój Błogosławieństwa", "Czerwona Mikstura(M)", "Niebieska Mikstura(M)", "Zielona Mikstura(M)", "Fioletowa Mikstura(Ś)", "Kamień Duszy +1", "Księga Taktyka (1)", "Księga Polimorfi (1)", "Księga Zapomnienia", "Peleryna Męstwa", "Dłoń Krytyka", "Dłoń Przebicia", "Zaczarowanie Przedmiotu (EXP)", "Zaczarowanie Przedmitu (PVP)", "Wzmocnienie Przedmiotu", "Teczka Kompetencji Magii", "Skrzynia Brońmistrza", "Szeroka Skrzynia Brońmistrza", "Skrzynia Zbrojmistrza", "Szeroka Skrzynia Zbrojmistrza", "Szeroka Skrzynia Jubilerska", "Kufer Czaru", "Klucz Czaru"],
//Ulepszacze
["Włókno Prozaidowe", "Pudełko", "Klepsydra", "Sól Fizjologiczna", "Tętnica Niedźwiedzia", "Morela", "Kawałek Szpuli", "Matarasu", "Gliniak", "Podręczniki Kowalskie", "Biała Wstęga", "Zwierciadło", "Księga Zaklęć", "Zaklęcie Kielinowe", "Grzebień", "Drewniana Tarcza", "Chiński Maret", "Czarna Tabletka", "Czarysz", "Biała Nić", "Kawałek Szubienicy", "Kompas Słoneczny"]);