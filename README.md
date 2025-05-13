# Personal GitHub Page

A terminal-inspired personal website for my GitHub profile. Features include:

- Terminal-style UI with monospace font and command line aesthetics
- Responsive design optimized for different screen sizes
- Sections for projects, skills, learning progress, and contact information
- Interactive elements with subtle animations
- Blog and tools radar sections

Built with HTML, CSS, and vanilla JavaScript.

## Features


- Clean section organization with subtle animations
- Project showcase with simple hover effects
- Professional experience timeline
- Dark theme with excellent readability
- Fully responsive layout for all devices

## Setup Instructions

1. Clone this repository to your local machine
2. Add your profile picture to the `images` directory as `profile-pic.jpg` (80x80px recommended)
3. Edit the `index.html` file to update your:
   - Personal information
   - Bio text
   - Project details
   - Work experience
   - Contact links
4. Customize the CSS in `css/style.css` if desired
5. Deploy to GitHub Pages or your preferred hosting platform

## Deployment to GitHub Pages

To deploy this page using GitHub Pages:

1. Push this repository to your GitHub account
2. Go to the repository settings
3. Navigate to the "Pages" section
4. Select the main branch as the source
5. Your page will be published at `https://[your-username].github.io/[repo-name]/`

## Customization

### Structure

The page follows a simple structure:

```
- Header (name, title, location)
- Bio (short paragraph)
- Projects (list of your work)
- Experience (work history)
- Links (contact information)
- Footer
```

### Adding Projects

To add new projects to your page, copy one of the existing project cards in the HTML and update:

```html
<div class="link-card">
    <h2>Project Name</h2>
    <p>Description of your project.</p>
    <a href="https://github.com/your-username/your-repo" target="_blank">view repo</a>
</div>
```

### Changing Colors

The site uses a minimal color palette:
- Background: #0f0f0f
- Text: #e2e2e2 (primary), #888 (secondary)
- Hover effects use subtle opacity changes

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Design inspiration: [nexxel.dev](https://www.nexxel.dev/)
