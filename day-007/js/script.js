// search
const searchbar = document.querySelector('#searchbar');
const search = document.querySelector('#search-icon');

search.addEventListener("click", () => {
    searchbar.classList.toggle("open");
});

// menu
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const box = document.querySelector('#box');


menu.addEventListener("click", () => {
    [box, nav].forEach((el) => el.classList.toggle("active"));
});