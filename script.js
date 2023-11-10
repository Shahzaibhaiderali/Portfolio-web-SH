document.querySelector('.menu-toggle').addEventListener('click', function () {
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

const sections = document.querySelectorAll("section");

// Callback function to handle intersection
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a CSS class to trigger the animation
            entry.target.classList.add("animate");
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Adjust this threshold as needed
});

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add form validation and submission logic here
        // For example, you can use the Fetch API to send the form data to your server.

        // For a basic example, you can simply clear the form fields:
        contactForm.reset();
        alert("Form submitted successfully!"); // You can replace this with your own logic
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Hide the loading screen after 5 seconds
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 5000); // 5000 milliseconds = 5 seconds
});
