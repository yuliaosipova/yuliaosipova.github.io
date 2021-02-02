let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');

burger.onclick = function() {
  menu.classList.toggle('menu-open');
}