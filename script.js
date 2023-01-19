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
    var li = element;
    var name = li.children[0].children[0];
    // console.log(li);
    // console.log(name);
    if (!li.classList.contains("navLiHover")) {
        li.classList.add("navLiHover");
        // name.classList.add("shadow");
        // li.classList.add("shadow");
        name.src = `./images/${name.alt}-LG.svg`
        // console.log(li.children[0].src);
        li.children[0].style.color = "lightgrey";
    }else {
        li.classList.remove("navLiHover");
        // name.classList.remove("shadow");
        // li.classList.remove("shadow");
        name.src = `./images/${name.alt}-DSG.svg`
        li.children[0].style.color = "darkslategrey";
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
    var icon = element;
    var name = icon.alt;
    // console.log(icon);
    // console.log(icon.src);
    // console.log(name);
    // console.log(icon.style.top);
    if (!icon.classList.contains("socialHover")) {
        icon.classList.add("socialHover");
        icon.classList.add("shadow");
        icon.src = `./images/${name}-fill-SG.svg`;
    }else {
        icon.classList.remove("socialHover");
        icon.classList.remove("shadow");
        icon.src = `./images/${name}-fill-DSG.svg`
    }
}