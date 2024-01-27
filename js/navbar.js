const navbarToggle = document.querySelector('.navbar-toggler')
const collapse = document.querySelector('.collapse')
const navTitle = document.querySelector('.nav-title')

navbarToggle.addEventListener('click', navbarShow)
function navbarShow() {
    collapse.classList.toggle('show')
    navTitle.classList.toggle('d-none')
}

const dropDown = document.querySelector('.dropdown-toggle')
const dropMenu = document.querySelector('.dropdown-menu')

dropDown.addEventListener('click', dropShow)
function dropShow() {
    dropMenu.classList.toggle('show')
}
