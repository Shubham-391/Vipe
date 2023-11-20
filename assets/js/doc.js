let view = document.querySelector(".view"), span1 = document.querySelector(".span1"), span2 = document.querySelector(".span2"), span3 = document.querySelector(".span3");
// navbar
function navbar() {
    view.classList.toggle("right-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate-45");
    span2.classList.toggle("rotate-135");
    span2.classList.toggle("translate-icon");
    span3.classList.toggle("hidden");
};
function navbar2() {
    view.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    span1.classList.toggle("rotate-45");
    span2.classList.toggle("rotate-135");
    span2.classList.toggle("translate-icon");
    span3.classList.toggle("hidden");
};

// back to top

let topIcon = document.getElementById("top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topIcon.style.display = "flex";
    }
    else {
        topIcon.style.display = "none";
    }
});

function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
    document.body.classList.remove("overflow-hidden")
}, 2000);