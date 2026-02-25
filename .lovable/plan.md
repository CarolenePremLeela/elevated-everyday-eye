# Experience Section Update

## Issue Found

The experience entries are not in correct reverse-chronological order. The "Career Break" (May 2024 - Nov 2025) is listed **after** Tuckermotors (Feb 2020 - May 2024), when it should come **before** it.

## Planned Change

**File:** `src/components/Experience.tsx`

Reorder the `experiences` array to proper reverse-chronological order:

1. **Nrolled Inc** -- November 2025 - Present
2. **Career Break** -- May 2024 - November 2025
3. **Tuckermotors** -- February 2020 - May 2024
4. **Firstcall Automation** -- July 2018 - February 2020

No content changes -- just swapping the position of the Career Break and Tuckermotors entries so the timeline reads correctly from most recent to oldest.

Change total experience from6+ to 8