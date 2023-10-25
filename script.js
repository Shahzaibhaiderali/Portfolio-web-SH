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

const skills = document.querySelectorAll('.skill');

function checkSkills() {
  skills.forEach((skill) => {
    const skillPosition = skill.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight / 1.3;

    if (skillPosition < scrollPosition) {
      const rating = skill.querySelector('.rating');
      const percent = rating.getAttribute('data-percent');
      rating.style.width = percent + '%';
    }
  });
}

window.addEventListener('scroll', checkSkills);
window.addEventListener('resize', checkSkills);

// Initial check
checkSkills();

