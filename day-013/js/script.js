const btns = document.querySelectorAll(".btn");
const callTop = document.querySelector(".call-top");
const callBottom = document.querySelector(".call-bottom");
const icon =document.querySelector(".icon");

btns.forEach((btns) => btns.addEventListener("click", () => {
    callTop.classList.toggle("call-top-active");
    callBottom.classList.toggle("call-bottom-active");
    icon.classList.toggle("icon-active");
}));

const close = document.querySelector(".close");

close.addEventListener("click", () => {
    callTop.classList.toggle("call-top-active");
    callBottom.classList.toggle("call-bottom-active");
    icon.classList.toggle("icon-active");
});