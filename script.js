  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu visibility on button click
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });

    // Hide menu when a link is clicked (on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
      });
    });
  });
