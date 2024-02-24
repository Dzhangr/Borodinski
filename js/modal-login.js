let modal = document.querySelector(".modal");
let modalMap = document.querySelector(".modal--map");
let btnOpenModalLogin = document.querySelector(".user-menu__link");
let btnCloseModalLogin = document.querySelector(".modal__close-btn");
let btnCloseModalMap = document.querySelector(".modal__close-btn--map");
let btnOpenModalMap = document.querySelector(".btn-open-map");

btnOpenModalLogin.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal--show");
});

btnCloseModalLogin.addEventListener("click", function () {
    modal.classList.remove("modal--show");
});

btnOpenModalMap.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.add("modal--show");
});

btnCloseModalMap.addEventListener("click", function () {
    modalMap.classList.remove("modal--show");
});

