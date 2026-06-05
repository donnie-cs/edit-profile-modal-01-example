# Add Edit Profile modal dialog

**Author:** @jordan-dev  ·  **Branch:** `pr/edit-profile-modal` → `main`

## What this does

Implements the Edit Profile modal from the Figma (`docs/dialog.png`). Clicking
**Edit profile** on the account settings page pops a dialog with Name and Username
fields and a **Save changes** button. Closes via the X in the corner or by clicking
the backdrop.

## Screenshots

Looks just like the design (navy button, rounded corners, centered overlay).

## How I tested

- Opened it in Chrome, typed in both fields, hit Save — values log to the console.
- Clicked the X and the backdrop, both close it.
- Scrolled the page with it open and it stays centered.

## Notes

- Kept everything in one `modal.ts` so it's easy to find.

## Checklist

- [x] Matches the design
- [x] Works in Chrome
- [x] No console errors

Should be good to merge — pretty straightforward component.
