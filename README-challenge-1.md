# Frontend Challenge: Responsive Two-Column Layout

## Objective
Build a responsive layout that adapts between desktop and mobile viewports.

## Requirements

**Desktop (>768px):**
- Two-column layout, side by side
- Left column: Text content, **vertically aligned to the bottom**
- Right column: An image that is **positioned at the bottom** of its container (with space above), and **cropped at the bottom** (showing the top portion of the image)

**Mobile (≤768px):**
- Single column, stacked vertically
- Image appears **at the top** (200px wide × 100px tall)
- Text appears **at the bottom**

## Constraints
- Use HTML and CSS only (no JavaScript required)
- The image should maintain its aspect ratio and crop naturally from the bottom
- Use the image provided: `fingerprint.png`

## Time
~15 minutes

## Evaluation Criteria
- Correct responsive behavior (flexbox reordering)
- Proper image cropping technique
- Clean, maintainable CSS
- Semantic HTML structure