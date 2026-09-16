# Warm Editorial Portfolio Redesign

## Goal
Replace the current profile photo and restyle the full portfolio around the selected **Manuscript editorial hero** direction, using the uploaded manuscript as the design source.

## Visual direction
- Use the uploaded professional portrait as the prominent first-viewport image, with a natural crop and restrained editorial frame.
- Apply the selected Balanced Manuscript palette: parchment, ink, aged teal, burgundy, and muted gold.
- Use **Instrument Serif** for headings and **Work Sans** for body copy.
- Replace the current dark gradients, glowing effects, floating circles, and rounded app-card look with warm paper surfaces, hairline rules, chapter markers, and generous editorial spacing.
- Keep the result professional for a Technical Team Lead: manuscript-inspired, but clean rather than decorative.

## Page changes
1. **Opening and navigation**
   - Rebuild the opening to match the selected split composition: framed portrait beside name, role, concise introduction, key details, and actions.
   - Keep email, phone, GitHub, LinkedIn, projects, contact, and resume actions working.
   - Restyle navigation as a minimal editorial header with a usable mobile menu.

2. **Portfolio chapters**
   - Give each section a numbered editorial heading and subtle manuscript divider.
   - Present About highlights as concise statistics instead of floating cards.
   - Turn Experience into a clear vertical career chronology emphasizing the Nrolled promotion.
   - Reformat Skills into compact indexed groups.
   - Present Projects as numbered case-study features with visible outcomes and technology labels.
   - Restyle Education, Languages, and Contact to use the same quiet editorial system without changing their content.

3. **Design system and finishing**
   - Define the selected colors, typography, borders, shadows, and motion as shared theme tokens.
   - Use restrained entrance and divider animations, with reduced-motion support.
   - Preserve mobile readability and ensure the opening hints at the next section on common screen sizes.
   - Update page metadata so the description reflects Carolene's current eight years of experience and removes template social metadata.

## Assets and technical details
- Store the uploaded portrait through the project asset flow and reference its generated asset pointer.
- Keep the existing React/Vite structure, GitHub Pages subpath behavior, static content, and resume download behavior.
- No backend, database, authentication, or new external service will be added.
- Load the selected fonts from the document head rather than importing remote font URLs in CSS.

## Verification
- Check the finished page at desktop and mobile widths.
- Verify navigation, project link, email/phone links, social links, and resume action.
- Confirm the portrait loads, text does not overlap, the page remains readable, and the production build is clean.
