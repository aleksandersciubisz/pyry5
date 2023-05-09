import './style.css'
import '/styles/headerNav.css'
import '/styles/footerNav.css'

// Reusable styles
import '/styles/reusables/typography.css'
import '/styles/reusables/links&buttons.css'
import '/styles/reusables/cursor.css'
import '/styles/reusables/blob.css'
import '/styles/reusables/horizontalScroll.css'

// Section styles
import '/styles/sections/home.css'
import '/styles/sections/news.css'
import '/styles/sections/parish.css'
import '/styles/sections/priestsSistersParishioners.css'

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
// Horizontal scroll START

// const parishSections = gsap.utils.toArray('#parish-container section')

// let parishScroll = gsap.to(parishSections, {
// 	xPercent: -100 * (parishSections.length - 1),
// 	ease: 'none',
// 	scrollTrigger: {
// 		trigger: '#parish-container',
// 		pin: true,
// 		scrub: 1,
// 		end: '+=3000',
// 	},
// })

// Horizontal scroll END
// #######################################
