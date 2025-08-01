<script>
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;

      if (menuOpen) {
        navMenu.classList.remove('max-h-0');
        navMenu.classList.add('max-h-96'); // adjust height as needed
      } else {
        navMenu.classList.remove('max-h-96');
        navMenu.classList.add('max-h-0');
      }
    });

    // Optional: Close menu on link click (on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('max-h-96');
        navMenu.classList.add('max-h-0');
        menuOpen = false;
      });
    });
  });
</script>
