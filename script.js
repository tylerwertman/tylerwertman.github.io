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
    console.log(img);
    if (!element.classList.contains("navLiHover")) {
        element.classList.add("navLiHover");
        // img.classList.add("shadow");
        element.classList.add("shadow");
        img.src = `./images/${img.alt}-LG.svg`
        // console.log(li.children[0].src);
        text.style.color = "lightgrey";
    }else {
        element.classList.remove("navLiHover");
        // img.classList.remove("shadow");
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
var nav = document.getElementsByTagName("nav");
    if (nav.className === "") {
        nav.className += "responsive";
    } else {
        nav.className = "";
    }
}
