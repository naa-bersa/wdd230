// Hamburger Menu


const hamBurger = document.querySelector('#mybutton');
const navElement = document.querySelector('nav');

hamBurger.addEventListener('click',()=> {
	navElement.classList.toggle('open')

})



