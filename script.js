 const menuBtn = document.getElementById('menu-btn');
        const navMenu = document.getElementById('nav-menu');

        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });

        // Hide menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.add('hidden');
            });
        });