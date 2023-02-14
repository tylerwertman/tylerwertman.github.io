console.log("websiteLoaded");

function navH1Hover(element) {
    console.log("navH1Hover running");
    var h1 = element;
    // console.log(h1.children[0].innerText);
    if(!h1.children[0].classList.contains("navH1Hover")) {
        h1.children[0].classList.add("navH1Hover");
        h1.children[0].style.color = "seagreen";
    }else{
        h1.children[0].classList.remove("navH1Hover");
        h1.children[0].style.color = "darkslategrey";
    }
}

function navLiHover(element) {
    console.log("navLiHover running");
    var img = element.children[0];
    var text = element.children[1]
    // console.log(li);
    // console.log(img);
    if (!element.classList.contains("navLiHover")) {
        element.classList.add("navLiHover");
        element.classList.add("shadow");
        img.src = `./images/${img.alt}-LG.svg`
        // console.log(li.children[0].src);
        text.style.color = "lightgrey";
    }else {
        element.classList.remove("navLiHover");
        element.classList.remove("shadow");
        img.src = `./images/${img.alt}-DSG.svg`
        text.style.color = "darkslategrey";
    }
}
// function buttonHover(element) {
//     console.log("buttonHover running");
//     var button = element;
//     var name = button.children[0].alt;
//     // console.log(button.style.color);
//     // console.log(button.children[0].alt);
//     if (!button.classList.contains("buttonHover")) {
//         button.classList.add("buttonHover");
//         icon.classList.add("socialHover");
//         button.children[0].src = `./images/${name}-fill-SG.svg`
//         button.children[1].style.color = "seagreen";
//     }else {
//         button.classList.remove("buttonHover");
//         icon.classList.remove("socialHover");
//         button.children[0].src = `./images/${name}-DSG.svg`
//         button.children[1].style.color = "darkslategrey";
//     }
// }

function socialHover(element){
    console.log("socialHover running");
    var text = element.alt;
    // console.log(icon);
    // console.log(icon.src);
    // console.log(name);
    // console.log(icon.style.top);
    if (!element.classList.contains("socialHover")) {
        element.classList.add("socialHover");
        element.classList.add("shadow");
        element.src = `./images/${text}-fill-SG.svg`;
    }else {
        element.classList.remove("socialHover");
        element.classList.remove("shadow");
        element.src = `./images/${text}-fill-DSG.svg`
    }
}

function navStack() {
var nav = document.querySelector("#navLinksSE");
console.log(nav);
    if (nav.className == "toggle") {
        nav.className = "";
        nav.style.display = "flex"
    } else {
        nav.className += "toggle";
        nav.style.display = "none"
    }
}

//Pokemon
async function newPoke() {
    var rng = Math.floor(Math.random() * 152);
    console.log("running newPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+rng);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    var pokeText = document.querySelector(".js p");
    pokeText.innerText = "Who's that Pokemon?"
    pokeImg.classList.add("sillhouette")
    pokeText.style.textTransform = "";
    console.log(pokeData);
    pokeImg.src = pokeData.sprites.front_default
    currentPoke = rng;
    return currentPoke;
}
var currentPoke = newPoke();

async function revealPoke() {
    console.log("running revealPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    var pokeText = document.querySelector(".js p");
    pokeText.innerText = `It's ${pokeData.name}!`;
    console.log(pokeImg.classList);
    pokeImg.classList.remove("sillhouette")
    pokeText.style.textTransform = "Capitalize";

}
async function shinyPoke() {
    console.log("running shinyPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_default) {
        pokeImg.src = pokeData.sprites.front_shiny;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_default) {
        pokeImg.src = pokeData.sprites.back_shiny;
    }
}
async function defaultPoke() {
    console.log("running defaultPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_shiny) {
        pokeImg.src = pokeData.sprites.front_default;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_shiny) {
        pokeImg.src = pokeData.sprites.back_default;
    }
}

async function frontPoke() {
    console.log("running frontPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_default) {
        pokeImg.src = pokeData.sprites.front_default;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_shiny){
        pokeImg.src = pokeData.sprites.front_shiny
    }
}
async function backPoke() {
    console.log("running backPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_default) {
        pokeImg.src = pokeData.sprites.back_default;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_shiny){
        pokeImg.src = pokeData.sprites.back_shiny
    }
}