# Aayushman Thakulla's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases my skills, projects, and provides a way for visitors to get in touch.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Smooth scrolling and animations
- Contact form
- Mobile-friendly navigation
- Sections for About, Skills, Projects, and Contact
- Social media links

## Setup

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. Customize the content as needed

## Customization

### Personal Information
Edit the following sections in `index.html`:
- Update the name and age in the About section
- Add your location if desired
- Update the email and phone number in the Contact section
- Add your social media links in the footer

### Styling
The website uses CSS variables for easy customization. In `styles.css`, you can modify:
- `--primary-color`: Main theme color
- `--secondary-color`: Secondary theme color
- `--text-color`: Main text color
- `--light-text`: Secondary text color
- `--background`: Background color
- `--section-bg`: Section background color

### Projects
To add projects:
1. Find the projects section in `index.html`
2. Copy the project-card div structure
3. Add your project details, images, and links

### Skills
To modify skills:
1. Find the skills section in `index.html`
2. Add or remove skill cards as needed
3. Update the icons using Font Awesome classes

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For any questions or suggestions, please use the contact form on the website.

## License

This project is open source and available under the MIT License.

## Image Guidelines

### Image Requirements
- Profile Image:
  - Recommended size: 600x600 pixels
  - Format: JPG or PNG
  - Location: `images/profile.jpg`
  - Keep file size under 200KB for optimal loading

- Project Images:
  - Recommended size: 1200x800 pixels
  - Format: JPG or PNG
  - Location: `images/project-*.jpg`
  - Keep file size under 300KB per image
  - Use descriptive filenames (e.g., `project-portfolio.jpg`, `project-ecommerce.jpg`)

### Image Optimization
For best performance:
1. Compress images before uploading
2. Use modern image formats (WebP with JPG fallback)
3. Maintain aspect ratios
4. Use descriptive alt text for accessibility

### Adding New Images
1. Place new images in the `images` directory
2. Use consistent naming conventions
3. Update the HTML with correct image paths
4. Test the website to ensure images load properly

## Branding Assets

### Logo
The website uses a custom image logo:
- File: `images/logo.jpg`
- Recommended size: 200x50 pixels
- Format: JPG
- Responsive design with hover effect
- Maintains aspect ratio on all devices

To update the logo:
1. Replace the existing `logo.jpg` in the `images` directory
2. Ensure the new logo has similar dimensions
3. Test the website to verify the logo displays correctly

### Favicon
The website includes favicon support for various devices:
- Standard favicon (16x16, 32x32)
- Apple Touch Icon (180x180)
- Android Chrome icons (192x192, 512x512)
- Web App Manifest for PWA support

To update the favicon:
1. Replace the existing favicon files in the `images` directory
2. Update the `site.webmanifest` file if needed
3. Ensure all icon sizes are available 