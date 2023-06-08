const menu = document.getElementById("menu");
let line = document.querySelectorAll("#menu > div");

// menu.addEventListener("click", () => {
//     line.forEach((el) => {
//         el.classList.toggle("no-animation");
//     })
// })


// // tentativa -002
menu.addEventListener("click", () => {
    menu.classList.toggle('active');

    // if(menu.classList.contains('active')){
    //     menu.classList.add('rev')
    // }
})

// tentativa -003
// menu.addEventListener("click", () => {
//     menu.classList.toggle('active');
//     line.forEach((el) => {
//       el.classList.toggle("no-animation");
//     })

//     // if(menu.classList.contains('active')){
//     //     menu.classList.add('rev')
//     // }
// })