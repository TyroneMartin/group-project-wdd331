document.addEventListener('DOMContentLoaded', function() {
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNav = document.querySelector('nav.mobile-nav');

    function toggleMenu() {
        mobileNav.classList.toggle('show');
        openMenu.style.display = mobileNav.classList.contains('show') ? 'none' : 'block';
        closeMenu.style.display = mobileNav.classList.contains('show') ? 'block' : 'none';
    }

    openMenu.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileNav.contains(event.target) && !openMenu.contains(event.target) && !closeMenu.contains(event.target)) {
            mobileNav.classList.remove('show');
            openMenu.style.display = 'block';
            closeMenu.style.display = 'none';
        }
    });
});