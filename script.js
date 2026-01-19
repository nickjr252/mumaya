// Add any interactivity here
console.log("Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
});

 (function () {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            const overlay = document.getElementById('menuOverlay');

            function openMenu() {
                navLinks.classList.add('open');
                navLinks.setAttribute('aria-hidden', 'false');
                menuToggle.setAttribute('aria-expanded', 'true');
                overlay.classList.add('visible');
                overlay.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // prevent background scroll
            }

            function closeMenu() {
                navLinks.classList.remove('open');
                navLinks.setAttribute('aria-hidden', 'true');
                menuToggle.setAttribute('aria-expanded', 'false');
                overlay.classList.remove('visible');
                overlay.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }

            menuToggle.addEventListener('click', function (e) {
                const isOpen = navLinks.classList.contains('open');
                if (isOpen) closeMenu(); else openMenu();
            });

            // close when clicking overlay
            overlay.addEventListener('click', closeMenu);

            // close on Escape
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                    closeMenu();
                }
            });

            // close the menu when any nav link is clicked (mobile)
            navLinks.addEventListener('click', function (e) {
                if (e.target.tagName === 'A' && window.matchMedia('(max-width: 900px)').matches) {
                    closeMenu();
                }
            });
        })();






