# Portfolio

A modern, interactive personal portfolio website showcasing my work as a software developer.

## 📋 Description

This is my personal portfolio website, designed to present my skills, projects, and professional experience to potential employers and collaborators. It features a clean, modern dark theme with a terminal/code aesthetic, smooth animations, and a fully responsive design.

The portfolio demonstrates:
- Modern web development with HTML5, CSS3, and vanilla JavaScript
- Responsive design patterns and CSS Grid/Flexbox
- Particle effects and smooth scroll animations
- Professional presentation of technical skills and projects
- Contact form integration

## ✨ Features

- **Hero Section**: Eye-catching landing with typed text animation
- **About Me**: Personal introduction with statistics and a stylized code card
- **Skills Display**: Technical skills organized by categories (Languages, Tools, Concepts, Human Languages) with animated progress bars
- **Projects Showcase**: Filterable project grid showcasing key work (Minishell, Philosophers, Inception, Push Swap, so_long, IRC Server)
- **Experience Timeline**: Professional experience and internships presented chronologically
- **Contact Section**: Multiple contact methods and functional contact form
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll reveal effects, particle animations, and transitions
- **Dark Theme**: Modern dark UI with cyan accent colors

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5 (semantic markup)
  - CSS3 (Grid, Flexbox, animations, variables)
  - Vanilla JavaScript (DOM manipulation, scroll events)
  - Canvas API (particle effects)

- **Libraries & Fonts**:
  - Google Fonts (JetBrains Mono, Syne)
  - No external frameworks (lightweight & fast)

- **Features**:
  - Smooth scrolling
  - Scroll progress bar
  - Loading animation
  - Mobile-responsive navigation

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── style.css          # Comprehensive CSS with variables and animations
├── script.js          # Vanilla JavaScript for interactivity
└── README.md          # This file
```

## ⚙️ Installation

No build process required! This is a static website.

### Option 1: Direct File Access
```bash
# Clone or download the repository
git clone https://github.com/noraake/portfolio.git
cd portfolio

# Open in your default browser
open index.html
# Or on Linux:
# xdg-open index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 🚀 Usage

Simply open the `index.html` file in a web browser. The portfolio is fully interactive:

- **Navigation**: Use the top menu to jump to sections
- **Scroll**: Smooth scroll animations reveal content as you explore
- **Project Filters**: Click filter buttons to view projects by category
- **Contact Form**: Fill out the contact form to send messages
- **Mobile Menu**: Hamburger menu appears on smaller screens
- **Responsive**: Resize your browser to see mobile adaptations

## 🎨 Customization

The design uses CSS variables for easy theming. Edit the variables in `style.css` (lines 7-30):

```css
:root {
  --bg:        #080b10;      /* Background color */
  --cyan:      #00d4ff;      /* Accent color */
  --text:      #e2eaf5;      /* Text color */
  /* ... more variables ... */
}
```

To update content:
1. Edit `index.html` for text and structure
2. Modify `style.css` for styling
3. Update `script.js` for functionality

## 📸 Screenshots

The portfolio features:
- Dark terminal-inspired aesthetic
- Smooth scroll reveals and animations
- Particle background effects in hero section
- Animated progress bars for skills
- Filterable project grid
- Professional timeline for experience
- Fully functional contact section

## 📚 What I Learned

Building this portfolio taught me:
- **CSS Mastery**: Advanced Grid, Flexbox, animations, and responsive design
- **JavaScript Skills**: DOM manipulation, event listeners, scroll interactions
- **Web Design**: UX/UI principles, visual hierarchy, animation timing
- **Performance**: Optimizing for fast load times without heavy frameworks
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Professional Presentation**: Showcasing technical work effectively

## 🧪 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE 11: ⚠️ Limited support (no CSS Grid/animations)

## 📝 Notes

- The contact form is currently a UI component. To make it fully functional, integrate with a backend service (Formspree, Netlify Forms, etc.)
- Update contact information (email, phone, social links) in the HTML
- Replace project links with your actual GitHub repositories
- Add your actual profile photo or keep the JSON card design

## 🔗 Connect With Me

- **GitHub**: [github.com/noraake](https://github.com/noraake)
- **Email**: noraakebli@gmail.com
- **LinkedIn**: [linkedin.com/in/noura-akebli](https://linkedin.com/in/noura-akebli)

## 👤 Author

**Noura Akebli**

Portfolio website built and designed by hand with HTML, CSS, and vanilla JavaScript.

## 📄 License

This portfolio is personal work. Feel free to draw inspiration from the design, but please create your own original content and design.
