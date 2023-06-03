// $(".menu").bind('click', function() {
// 	$(this).toggleClass('active');
// 	$(this).find('div').removeClass('no-animation');
// });

const menu = document.getElementById("menu");
let line = document.querySelectorAll("#menu > div");

menu.addEventListener("click", () => {
    line.forEach((el) => {
        el.classList.toggle("no-animation");
    })
})
