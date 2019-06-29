//mobile menu

const toggleNav = () => {
  nav.classList.toggle('nav-dropdown');
}
const nav = document.querySelector('.navigation');
const navIcon = document.querySelector('.mobile-nav');
navIcon.addEventListener('click', toggleNav.bind());

//button hover

const button = document.querySelectorAll('.btn');

button.forEach((btn) => {
  btn.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = "#6680A6";
    event.target.style.color = "#FFF";
  })
  btn.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = "#4C668C";
    event.target.style.color = "#E6E6E6";
  })
})

//form focus

const inputs = document.querySelectorAll('input, textarea');

inputs.forEach((input) => {
  input.addEventListener('focus', (event) => {
    event.target.style.background = "#E6FFFF";
  })
  input.addEventListener('blur', (event) => {
    event.target.style.background = "";
  })
})

