console.log('Let\'s write some javascript!')

const btn = document.querySelectorAll('.marq--cta');

btn.forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})