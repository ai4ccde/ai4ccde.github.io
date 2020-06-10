const navAllLinks = document.querySelector('.nav-all-links');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
const navIcon = document.querySelector('#nav-icon');
const body = document.querySelector('body');

navIcon.addEventListener('click', () => {
	navIcon.classList.toggle('open');
	navAllLinks.classList.toggle('state-opened-menu');
	body.classList.toggle('mobile-nav');
	body.classList.toggle('state-fixed-body');
});
