import { home, about, myProjects, contact} from './variables.js'

function sectionHome() {
    home.classList.add('active')

    about.classList.remove('active')
    myProjects.classList.remove('active')
    contact.classList.remove('active')
  }

function sectionAbout() {
    about.classList.add('active')

    home.classList.remove('active')
    myProjects.classList.remove('active')
    contact.classList.remove('active')
  }

   function sectionProjects() {
    myProjects.classList.add('active')

    home.classList.remove('active')
    about.classList.remove('active')
    contact.classList.remove('active')
  }

    function sectionContact() {
    contact.classList.add('active')

    home.classList.remove('active')
    about.classList.remove('active')
    myProjects.classList.remove('active')
  }

  export {
    sectionHome, 
    sectionAbout, 
    sectionProjects,
    sectionContact}