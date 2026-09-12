import './assets/styles/scss/main.scss'
import { renderAll } from './assets/js/render.js'
import { initReveal } from './assets/js/reveal.js'
import { initContactForm } from './assets/js/contactForm.js'

renderAll()
initReveal()
initContactForm(document.querySelector('#contact-form'))
