const navMenu = document.querySelector('ul.nav');
const menuToggle = document.querySelector('.menu-toggle');

// Add a click event listener to the menu toggle icon
menuToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle('active');
});