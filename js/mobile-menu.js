(() => {
    const openMenuBtn = document.querySelector('.open-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.menu');
    const mobileContainer = document.querySelector('.header-container');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-hidden');
        mobileContainer.classList.toggle('is-hidden');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };
    
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);


    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
        mobileMenu.classList.remove('is-hidden');

    });
})();