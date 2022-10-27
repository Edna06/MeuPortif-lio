import {home, about, myProjects, contact} from './variables.js'
import {sectionHome, sectionAbout, sectionProjects, sectionContact} from './section.js'

home.addEventListener('click', () => {sectionHome()})
about.addEventListener('click', () => {sectionAbout()})
myProjects.addEventListener('click', () => {sectionProjects()})
contact.addEventListener('click', () => {sectionContact()})



 