
# Portfolio Enhancement Plan

## Changes Overview

Two main updates: add the "Nrolled" project card and add your profile picture to the Hero section.

---

## 1. Add Profile Picture to Hero Section

- Copy the uploaded image (`Carolene_profile.jpg`) to `src/assets/Carolene_profile.jpg`
- Update `Hero.tsx` to display a circular profile photo above your name
- Styling: circular frame, subtle glow/shadow (`shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]`), ~160px on desktop / ~120px on mobile
- Responsive: centered above the name on all screen sizes
- Alt text: "Carolene Prem Leela -- Full Stack Developer"

## 2. Add "Nrolled" Project to Projects Section

- Add a new project object at the **top** of the `projects` array in `Projects.tsx`
- Mark it as `featured: true` so it spans full width
- Include all provided details (description, 6 bullet points, 7 tech tags)
- No changes to existing project cards or styling

---

## Technical Details

**Files modified:**
1. `src/components/Hero.tsx` -- Import profile image, add `<img>` element above the `<h1>`
2. `src/components/Projects.tsx` -- Prepend new Nrolled project object to the array

**New file copied:**
- `src/assets/Carolene_profile.jpg` (from uploaded image)

No dependencies added. No backend changes needed.
