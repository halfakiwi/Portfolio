(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigationLinks = document.getElementById('navigation-links');

  if (!menuButton || !navigationLinks) {
    return;
  }

  const mobileScreen = window.matchMedia('(max-width: 40rem)');

  function setMenuOpen(isOpen) {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    navigationLinks.hidden = !isOpen;
  }

  function updateNavigation() {
    // Move focus before hiding an element that currently contains it.
    if (mobileScreen.matches && navigationLinks.contains(document.activeElement)) {
      menuButton.hidden = false;
      menuButton.focus();
    }

    menuButton.hidden = !mobileScreen.matches;
    setMenuOpen(!mobileScreen.matches);
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  navigationLinks.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileScreen.matches) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileScreen.addEventListener('change', updateNavigation);
  updateNavigation();
})();
