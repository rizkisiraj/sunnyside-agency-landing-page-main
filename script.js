const mobileMenu = document.querySelector("#mobileMenu");
const mobileNav = document.querySelector(".mobile-nav");
const eggPict = document.querySelector("#img1");

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
});

function mediaFunction(x) {
    if (x.matches) {
        eggPict.setAttribute("src", "./images/mobile/image-transform.jpg");
    }

    else {
        eggPict.setAttribute("src", "./images/desktop/image-transform.jpg");
    }
}

var x = window.matchMedia("(max-width: 768px)");
mediaFunction(x);
x.addEventListener("change", mediaFunction);