# Portfolio Testing

Testing was performed on the deployed GitHub Pages website: [Lineth Garach’s Portfolio](https://halfakiwi.github.io/Portfolio/).

## Functional and Responsive Testing

| # | Test | Expected Result | Result |
| --- | --- | --- | --- |
| 1 | Test all navigation links from the Home page. | Each link opens the correct portfolio page. | PASS |
| 2 | Test all navigation links from the About page. | Each link opens the correct portfolio page. | PASS |
| 3 | Test all navigation links from the Projects page. | Each link opens the correct portfolio page. | PASS |
| 4 | Test all navigation links from the Skills page. | Each link opens the correct portfolio page. | PASS |
| 5 | Test all navigation links from the Contact page. | Each link opens the correct portfolio page. | PASS |
| 6 | Laptop/desktop layout on all five pages. | All five pages display correctly without overlapping content or horizontal scrolling. | PASS |
| 7 | Phone/mobile layout. | Content stacks correctly, remains readable, and does not create horizontal scrolling. | PASS |
| 8 | Responsive mobile navigation. | The Menu button appears on smaller screens and opens/closes the navigation correctly. | PASS |
| 9 | Submit the Contact form with required fields empty. | Validation messages appear and focus moves to the first invalid field. | PASS |
| 10 | Complete all Contact form fields with valid information and submit. | The demonstration success message appears and no message is actually sent. | PASS |
| 11 | Keyboard navigation. | Navigation links, form controls, and interactive elements can be reached and operated using the keyboard. | PASS |
| 12 | Skip-to-main-content link. | The skip link becomes available when keyboard focused and moves focus to the main content. | PASS |
| 13 | Mobile menu keyboard operation. | The menu can be opened using the keyboard, navigation links can be reached with Tab, and Escape closes the menu and returns focus to the Menu button. | PASS |
| 14 | Portfolio images. | The headshot and production photos load correctly, maintain their proportions, and do not break the page layout. | PASS |
| 15 | Sense & Sensibility project placeholder. | The “Production Photo Coming Soon” placeholder displays correctly without a broken image. | PASS |

## Lighthouse Accessibility Testing

Chrome Lighthouse Accessibility audits were run on the live GitHub Pages version of all five pages.

| Page | Accessibility Score | Requirement | Result |
| --- | --- | --- | --- |
| Home | 100 | 90 or higher | PASS |
| About Me | 100 | 90 or higher | PASS |
| Projects | 100 | 90 or higher | PASS |
| Skills | 100 | 90 or higher | PASS |
| Contact | 100 | 90 or higher | PASS |

All five pages exceeded the required Lighthouse Accessibility score of 90.

## Keyboard Accessibility

Keyboard-only testing confirmed:

- Keyboard focus is visible.
- Navigation links can be reached with Tab.
- Links can be activated with Enter.
- The skip link works and moves focus to the main content.
- Contact form fields can be reached with Tab.
- The form can be submitted from the keyboard.
- Invalid form submission moves focus to the first invalid field.
- Mobile navigation can be opened from the keyboard.
- Escape closes the mobile navigation and returns focus to the Menu button.

## Notes

- Testing was performed on the deployed GitHub Pages site rather than only local files.
- The Contact form is intentionally a demonstration and does not transmit or store messages.
- Sense & Sensibility currently uses a styled “Production Photo Coming Soon” placeholder rather than a broken or temporary external image.
- All current portfolio image files are under the project’s 500 KB image-size requirement.
