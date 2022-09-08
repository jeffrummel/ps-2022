console.log('Let\'s write some javascript!')

switchOff

const body = document.body
const btn = document.querySelectorAll('.inbound');
const menu = document.getElementById('menu-toggle')
let switchOff	=	document.querySelectorAll('.switchoff')

btn.forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})
	})
})

window.onscroll = function() {
	if (!document.querySelectorAll('.switchoff:not(switch)')) return
	for (const switchOn of switchOff) {
		if(switchOn.getBoundingClientRect().top <= window.innerHeight * 0.75 && switchOn.getBoundingClientRect().top > 0) {
			switchOn.classList.add('switch');
		}
	}
}

menu.addEventListener('click', function (e) {
	e.preventDefault()
	body.classList.toggle('visible-nav')
})