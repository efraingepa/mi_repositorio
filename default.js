const btn = document.querySelector('.nav-toggle')
const menu = document.querySelector('.nav')

btn.addEventListener('click', () => {
  menu.classList.toggle('nav--visible')
})