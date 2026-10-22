# Personal Portfolio Instructions

## Scope

- Build a personal portfolio with five pages: Home, About Me, Projects, Skills, and Contact.
- Work on only one requested task at a time.
- For the initial task, create only this `AGENTS.md` file. Do not create HTML, CSS, JavaScript, images, or other website files until requested.

## Design Direction

- Use a bold, theatrical, elegant aesthetic inspired by a theater playbill.
- Keep the result clean, modern, and professional, with clear visual hierarchy and readable spacing.
- Use this color palette:
  - Cream: `#F7F0E3`
  - Deep burgundy red: `#7A1F2B`
  - Gold: `#C49A45`
  - Dark charcoal: `#242020`
- Reserve gold for accents, borders, and small decorative details. Avoid using it for body text or large background areas.
- Use Playfair Display for headings, with a suitable serif fallback.
- Use a readable body font with appropriate fallbacks.
- Verify accessible contrast for actual text and background combinations; do not assume every palette pairing is accessible.

## Implementation Requirements

- Use only plain HTML5, CSS, and JavaScript. Do not use frameworks.
- Use semantic HTML5 elements.
- Use one external CSS stylesheet shared across the website.
- Use relative file paths for internal pages and local assets.
- Include exactly one `h1` per page and use a logical heading hierarchy.
- Give all images descriptive alt text. Use empty alt text only for purely decorative images so assistive technology can skip them.
- Keep every image file under 500 KB.
- Make every page responsive and usable on phones and laptops.
- Include a responsive navigation menu for mobile.
- Plan for at least one additional JavaScript interactive feature beyond the mobile menu, but implement it only when requested.

## Accessibility

- Prioritize accessibility and full keyboard navigation.
- Provide visible keyboard focus indicators and logical focus order.
- Use accessible names for controls and labels for form fields.
- Make the mobile navigation keyboard operable and expose its expanded state to assistive technology.
- Maintain readable text sizes, spacing, and color contrast.
- Target a Lighthouse Accessibility score of at least 90 on every page.
- Once pages exist, review keyboard navigation, responsive behavior, and accessibility alongside Lighthouse checks.

## Workflow and Version Control

- Review each task's changes before moving to the next task.
- Keep changes small and focused on the requested task.
- Make a small commit after each completed task with a clear, descriptive commit message.
- Push each completed task to GitHub.
- Never use reset or force push to undo changes. Revert commits instead.
- Preserve unrelated user changes and include only the completed task's files in its commit.
