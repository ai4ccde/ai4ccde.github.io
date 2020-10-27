const navAllLinks = document.querySelector('.nav-all-links');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
const navIcon = document.querySelector('#nav-icon');
const body = document.querySelector('body');
var w = window.innerWidth;


navIcon.addEventListener('click', () => {
	navIcon.classList.toggle('open');
	navAllLinks.classList.toggle('state-opened-menu');
	body.classList.toggle('mobile-nav');
	body.classList.toggle('state-fixed-body');
});

particlesJS.load('particles-js', '/js/particles.json', function() {
	console.log('callback - particles.js config loaded');
});

function openTab(evt, tabName) {

		// Declare all variables
		var i, tabcontent, tablinks;

		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName('tabcontent');
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = 'none';
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName('tablinks');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(' active', '');
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(tabName).style.display = 'block';
		evt.currentTarget.className += ' active';


}
AOS.init({
	duration: 500,
	once: true,
	offset: 50,
  });


 if (w < 900){
	AOS.init({
		duration: 500,
		once: true,
		offset: -100,
	  });

} else{
	AOS.init({
		duration: 500,
		once: true,
		offset: 150,
	  })
	

}

