const home = document.querySelector('.home')
const about = document.querySelector('.about')
const myProjects = document.querySelector('.projects')
const contact = document.querySelector('.contact')



  home.addEventListener('click', () => {
    home.classList.add('active')

    about.classList.remove('active')
    myProjects.classList.remove('active')
    contact.classList.remove('active')
  })


  about.addEventListener('click', () => {
    about.classList.add('active')

    home.classList.remove('active')
    myProjects.classList.remove('active')
    contact.classList.remove('active')
  })

  myProjects.addEventListener('click', () => {
    myProjects.classList.add('active')

    home.classList.remove('active')
    about.classList.remove('active')
    contact.classList.remove('active')
  })

  contact.addEventListener('click', () => {
    contact.classList.add('active')

    home.classList.remove('active')
    about.classList.remove('active')
    myProjects.classList.remove('active')
  })

 