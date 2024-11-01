var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navmain").style.top = "0px";
        document.querySelector(".navmain").style.position = "relative";
    }
    else {
        document.querySelector(".navmain").style.top = "-150px";
        document.querySelector(".navmain").style.position = "sticky";
    }
    prevScrollpos = currentScrollPos;
}

// about
document.querySelector('.aboutUs').addEventListener('click', () => {
    document.querySelector('.mask').style.display = "block";
    document.querySelector('.about-us-sidebar').style.right = "0%";
});
document.querySelector('.about-cut').addEventListener('click', () => {
    document.querySelector('.mask').style.display = "none";
    document.querySelector('.about-us-sidebar').style.right = "-500%";
});
document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.mask').style.display = "none";
    document.querySelector('.about-us-sidebar').style.right = "-500%";
});

