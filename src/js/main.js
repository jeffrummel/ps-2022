console.log('Let\'s write some javascript!')

const body = document.body
const btn = document.querySelectorAll('.marq--cta');
const menu = document.getElementById('menu-toggle')

btn.forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})

menu.addEventListener('click', function (e) {
	e.preventDefault()
	body.classList.toggle('visible-nav')
})