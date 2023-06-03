const menu = document.getElementById("menu");
let line = document.querySelectorAll("#menu > div");

menu.addEventListener("click", () => {
    line.forEach((el) => {
        el.classList.toggle("no-animation");
    })
})

// menu.classList.toggle("rev")

