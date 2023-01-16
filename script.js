console.log("websiteLoaded");

function navLiColor(element) {
    // console.log("navUlColor running");
    var li = element;
    var name = li.children[1].innerText;
    // console.log(name);
    // console.log(li);
    if (!li.classList.contains("navLiColor")) {
        li.classList.add("navLiColor");
        li.children[0].src = `./images/${name}-fill-SG.svg`
        // console.log(li.children[0].src);
        li.children[1].style.color = "seagreen";
    }else {
        li.classList.remove("navLiColor");
        li.children[0].src = `./images/${name}-DSG.svg`
        li.children[1].style.color = "darkslategrey";
    }
}
function navH1Color(element) {
    // console.log("navH1Color running");
    var h1 = element;
    // console.log(h1);
    if (!h1.classList.contains("navH1Color")) {
        h1.classList.add("navH1Color");
    }else {
        h1.classList.remove("navH1Color");
    }
}
function buttonColor(element) {
    var button = element;
    var name = button.children[0].alt;
    console.log(button.style.color);
    console.log(button.children[0].alt);
    if (!button.classList.contains("navLiColor")) {
        button.classList.add("navLiColor");
        button.children[0].src = `./images/${name}-fill-SG.svg`
        button.children[1].style.color = "seagreen";
    }else {
        button.classList.remove("navLiColor");
        button.children[0].src = `./images/${name}-DSG.svg`
        button.children[1].style.color = "darkslategrey";
    }
}


function iconsColor(element){
    var icon = element;
    var name = icon.alt;
    console.log(icon);
    console.log(icon.src);
    console.log(name);
    // if(icon.src == `./images/${name}-fill-LG.svg`) {
    //     icon.src = `./images/${name}-fill-DSG.svg`
    // }
    // else if(icon.src == `./images/${name}-fill-DSG.svg`){
    //     icon.src = `./images/${name}-fill-LG.svg`
    // }
}