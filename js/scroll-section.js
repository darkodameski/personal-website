const sections = document.querySelectorAll('section[id]')

function scrollActive(){

    const scrollY = window.pageYOffset

    sections.forEach(current =>{

        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav_menu a[href*=]' + sectionId + ']').classList
        }
        else{
            document.querySelector('nav_menu a[href*=]' + sectionId + ']').classList
        }
    })
}
window.addEventListener('scroll', scrollActive)
