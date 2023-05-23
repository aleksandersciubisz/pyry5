import './style.css'
import '/styles/headerNav.css'
import '/styles/footerNav.css'

// Reusable styles
import '/styles/reusables/typography.css'
import '/styles/reusables/links&buttons.css'
import '/styles/reusables/cursor.css'
import '/styles/reusables/blob.css'
import '/styles/reusables/horizontalScroll.css'
import '/styles/reusables/animation.css'

// Section styles
import '/styles/sections/home.css'
import '/styles/sections/news.css'
import '/styles/sections/parish.css'
import '/styles/sections/people.css'
import '/styles/sections/groups.css'
import '/styles/sections/sacraments.css'
import '/styles/sections/patrons.css'
import '/styles/sections/office.css'
import '/styles/sections/cementary.css'
import '/styles/sections/history.css'
import '/styles/sections/art.css'
import '/styles/sections/contact.css'

// #######################################
// navigation menu toggle - START
const navToggler = document.getElementById('nav-toggler')
const fullScreenNav = document.getElementById('full-screen-nav')
const navBlob = document.getElementById('blob')
const navBlobBlur = document.getElementById('blob-blur')
const navBlobBackground = document.getElementById('blob-background')

navToggler.addEventListener('click', navToggle)

function navToggle() {
	fullScreenNav.classList.toggle('full-screen-nav-visible')
	navBlob.classList.toggle('z-up-blob')
	navBlobBlur.classList.toggle('z-up-blob-blur')
	navBlobBackground.classList.toggle('z-up-blob-background')

	document.body.classList.toggle('stop-scrolling')
}
// navigation menu toggle - END
// #######################################

// #######################################
// blob-gradient moving in the background - START
const blob = document.getElementById('blob')

document.body.onpointermove = (event) => {
	const { clientX, clientY } = event

	blob.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 5000, fill: 'forwards' }
	)
}
// blob-gradient moving in the background - END
// #######################################

// #######################################
// custom cursor START
var cursor = {
	delay: 8,
	_x: 0,
	_y: 0,
	endX: window.innerWidth / 2,
	endY: window.innerHeight / 2,
	cursorVisible: true,
	cursorEnlarged: false,
	$dot: document.querySelector('.cursor-dot'),
	$outline: document.querySelector('.cursor-dot-outline'),

	init: function () {
		// Set up element sizes
		this.dotSize = this.$dot.offsetWidth
		this.outlineSize = this.$outline.offsetWidth

		this.setupEventListeners()
		this.animateDotOutline()
	},

	setupEventListeners: function () {
		var self = this

		// Anchor hovering
		document.querySelectorAll('a').forEach(function (el) {
			el.addEventListener('mouseover', function () {
				self.cursorEnlarged = true
				self.toggleCursorSize()
			})
			el.addEventListener('mouseout', function () {
				self.cursorEnlarged = false
				self.toggleCursorSize()
			})
		})

		// Button hovering
		document.querySelectorAll('button').forEach(function (el) {
			el.addEventListener('mouseover', function () {
				self.cursorEnlarged = true
				self.toggleCursorSize()
			})
			el.addEventListener('mouseout', function () {
				self.cursorEnlarged = false
				self.toggleCursorSize()
			})
		})

		// Button hovering
		document.querySelectorAll('.cursor-toggle').forEach(function (el) {
			el.addEventListener('mouseover', function () {
				self.cursorEnlarged = true
				self.toggleCursorSize()
			})
			el.addEventListener('mouseout', function () {
				self.cursorEnlarged = false
				self.toggleCursorSize()
			})
		})

		// Click events
		document.addEventListener('mousedown', function () {
			self.cursorEnlarged = true
			self.toggleCursorSize()
		})
		document.addEventListener('mouseup', function () {
			self.cursorEnlarged = false
			self.toggleCursorSize()
		})

		document.addEventListener('mousemove', function (e) {
			// Show the cursor
			self.cursorVisible = true
			self.toggleCursorVisibility()

			// Position the dot
			self.endX = e.pageX
			self.endY = e.pageY
			self.$dot.style.top = self.endY + 'px'
			self.$dot.style.left = self.endX + 'px'
		})

		// Hide/show cursor
		document.addEventListener('mouseenter', function (e) {
			self.cursorVisible = true
			self.toggleCursorVisibility()
			self.$dot.style.opacity = 1
			self.$outline.style.opacity = 1
		})

		document.addEventListener('mouseleave', function (e) {
			self.cursorVisible = true
			self.toggleCursorVisibility()
			self.$dot.style.opacity = 0
			self.$outline.style.opacity = 0
		})
	},

	animateDotOutline: function () {
		var self = this

		self._x += (self.endX - self._x) / self.delay
		self._y += (self.endY - self._y) / self.delay
		self.$outline.style.top = self._y + 'px'
		self.$outline.style.left = self._x + 'px'

		requestAnimationFrame(this.animateDotOutline.bind(self))
	},

	toggleCursorSize: function () {
		var self = this

		if (self.cursorEnlarged) {
			self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)'
			self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)'
		} else {
			self.$dot.style.transform = 'translate(-50%, -50%) scale(1)'
			self.$outline.style.transform = 'translate(-50%, -50%) scale(1)'
		}
	},

	toggleCursorVisibility: function () {
		var self = this

		if (self.cursorVisible) {
			self.$dot.style.opacity = 1
			self.$outline.style.opacity = 1
		} else {
			self.$dot.style.opacity = 0
			self.$outline.style.opacity = 0
		}
	},
}

cursor.init()

// custom cursor END
// #######################################

// #######################################
// people button START
const priestsButton = document.getElementById('priests-button')
const morePriests = document.getElementById('more-priests')
priestsButton.addEventListener('click', visible1)
function visible1() {
	morePriests.classList.add('visible')
	priestsButton.classList.add('button-invisible')
}

const sistersButton = document.getElementById('sisters-button')
const moreSisters = document.getElementById('more-sisters')
sistersButton.addEventListener('click', visible2)
function visible2() {
	moreSisters.classList.add('visible')
	sistersButton.classList.add('button-invisible')
}

const parishionersButton = document.getElementById('parishioners-button')
const moreParishioners = document.getElementById('more-parishioners')
parishionersButton.addEventListener('click', visible3)
function visible3() {
	moreParishioners.classList.add('visible')
	parishionersButton.classList.add('button-invisible')
}

// people cursor END
// #######################################

// #######################################
// HISTORY button START

const historyButton = document.getElementById('history-button')
const historySection = document.getElementById('history')

historyButton.addEventListener('click', historyVisible)
function historyVisible() {
	historySection.classList.add('history-visible')
	historyButton.classList.add('button-invisible')
}

// HISTORY cursor END
// #######################################

// #######################################
// "slide in" text animation START

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('scroll-animation')
		}
	})
})

const fadeIn = document.querySelectorAll('p')
fadeIn.forEach((el) => observer.observe(el))

// "slide in" text animation END
// #######################################
