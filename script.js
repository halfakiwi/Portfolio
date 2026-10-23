// Responsive mobile navigation.
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

// Contact form validation (portfolio demonstration only).
(() => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form || !status) {
    return;
  }

  const fields = [
    { id: 'contact-name', message: 'Please enter your name.' },
    { id: 'contact-email', message: 'Please enter a valid email address.' },
    { id: 'contact-subject', message: 'Please enter a subject.' },
    { id: 'contact-message', message: 'Please enter a message.' }
  ].map((field) => ({
    ...field,
    input: document.getElementById(field.id),
    error: document.getElementById(`${field.id}-error`)
  }));

  if (fields.some((field) => !field.input || !field.error)) {
    return;
  }

  function validateField(field) {
    const isValid = field.input.value.trim() !== '' && field.input.validity.valid;

    field.error.textContent = isValid ? '' : field.message;
    field.error.hidden = isValid;

    if (isValid) {
      field.input.removeAttribute('aria-invalid');
    } else {
      field.input.setAttribute('aria-invalid', 'true');
    }

    return isValid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';
    const invalidFields = fields.filter((field) => !validateField(field));

    if (invalidFields.length > 0) {
      invalidFields[0].input.focus();
      return;
    }

    status.textContent = 'Form completed successfully. This portfolio demonstration does not send messages.';
  });

  fields.forEach((field) => {
    field.input.addEventListener('input', () => {
      status.textContent = '';
      if (field.input.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
  });

  // Use our accessible feedback instead of native validation popups.
  form.noValidate = true;
})();
