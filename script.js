document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('ul.nav');
    nav.classList.toggle('active');
});


 // JavaScript for smooth scrolling to sections
 function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

