let menuButton = document.querySelector(".menu__open__icon");
let menuActive =  document.querySelector(".header__menu__active");
let closeButton = document.querySelector(".close__icon");

menuButton.addEventListener("click", ()=> {
  menuActive.classList.add("menu__active");
})

closeButton.addEventListener("click", ()=> {
  menuActive.classList.remove("menu__active")
})