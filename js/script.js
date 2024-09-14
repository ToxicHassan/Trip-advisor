const $ = document
const hamburgerBtn = $.querySelector('.hamburger-btn')
const navMenu = $.querySelector('.menu')
const navCloseMenuBtn = $.querySelector('.close-btn')


hamburgerBtn.addEventListener('click', () => {
    navMenu.style.right = '0'
})
navCloseMenuBtn.addEventListener('click', () => {
    navMenu.style.right = '-29rem'
})