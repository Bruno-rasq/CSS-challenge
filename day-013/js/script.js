const btns = document.querySelectorAll(".btn");
const callTop = document.querySelector(".call-top");
const callBottom = document.querySelector(".call-bottom");

btns.forEach((btns) => btns.addEventListener("click", () => {
    callTop.classList.toggle("call-top-active");
    callBottom.classList.toggle("call-bottom-active");
}));