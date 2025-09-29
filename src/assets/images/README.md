# Project Images

Place project cover images in this folder under `projects/` using the naming convention based on your project title.

- Folder: `src/assets/images/projects/`
- File name: kebab-case of the project title (letters/numbers only)
- Supported extensions: .png, .jpg, .jpeg, .webp, .avif, .svg

Examples
- "Weather Forecast Application" -> `weather-forecast-application.png`
- "Sales Forcasting using Multi Models" -> `sales-forcasting-using-multi-models.jpg`
- "CNN-based Image Classification" -> `cnn-based-image-classification.webp`
- "All type of Calculator" -> `all-type-of-calculator.png`

Notes
- If a `gallery` array is provided in the project data, those images will be used for the Featured carousel and card cover; otherwise we’ll try to load the cover by title.
- If no matching image is found, the `AppImage` component falls back to your profile image.
- You can override any item by setting `project.image` (absolute or public path).
