console.log("websiteLoaded");

function navUlColor(element) {
    // console.log("navUlColor running");
    var li = element;
    var name = li.children[1].innerText;
    // console.log(name);
    // console.log(li);
    if (!li.classList.contains("navLiColor")) {
        li.classList.add("navLiColor");
        li.children[0].src = `./images/${name}-fill.svg`
        console.log(li.children[0].src);
        li.children[1].style.color = "white";
    }else {
        li.classList.remove("navLiColor");
        li.children[0].src = `./images/${name}.svg`
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