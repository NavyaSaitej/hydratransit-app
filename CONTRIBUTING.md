# Contributing to HydraTransit
Thank you for your interest in contributing to the HydraTransit project! This document provides guidelines and information for contributors.

## 🚀 Quick Start

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- Python 3.x or Node.js (for local HTTP server)
- Git

### Local Development Setup

1. **Fork and Clone the Repository**

```bash
git clone https://code.swecha.org/your-username/HydraTransit.git
cd HydraTransit
```

2. **Start Development Server**

```bash
# Using Python 3.x
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

3. **Open in Browser**
   Navigate to `http://localhost:8000` to view the application.


## 📁 Project Structure

```
HydraTransit/
├── public/                   # Static assets (if any)
├── app.js                    # Main application logic (routing, map, wallet, QR, BLE)
├── index.html                # Entry point HTML file
├── style.css                 # Global styles (glassmorphism, animations, responsive)
├── state_checkpoint.json     # System parameters, landmark datasets, task checklists
├── .gitignore                # Git ignore rules
├── .gitlab-ci.yml            # GitLab CI/CD pipeline configuration
├── CONTRIBUTING.md           # Contribution guidelines
└── README.md                 # Project documentation
```


## 🎨 Tech Stack

- **Markup**: HTML5 (semantic elements)
- **Styling**: CSS3 (glassmorphism, animations, responsive design)
- **Logic**: Vanilla JavaScript (ES6+)
- **Mapping**: Leaflet.js with CartoDB Dark Matter tiles
- **QR Generation**: HTML5 Canvas (zero external dependencies)
- **BLE Simulation**: Web Bluetooth API
- **State Persistence**: localStorage API
- **CI/CD**: GitLab CI


## 📝 Development Guidelines

### Code Style

- **JavaScript**: Use modern ES6+ syntax (arrow functions, template literals, `const`/`let`)
- **HTML**: Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, etc.)
- **CSS**: Follow the existing glassmorphic design system; use CSS custom properties for theming
- **Naming**: Use `camelCase` for JavaScript variables/functions, `kebab-case` for CSS classes and IDs
- **Comments**: Add JSDoc-style comments for functions and inline comments for complex logic

### Styling Guidelines

- **Glassmorphism**: Maintain the existing glassmorphic design language (`backdrop-filter`, translucent backgrounds)
- **Responsive Design**: Use CSS media queries; test at mobile, tablet, and desktop breakpoints
- **Custom Properties**: Use CSS variables defined in `:root` for colors, spacing, and typography
- **Animations**: Use CSS transitions and `@keyframes` for micro-interactions; keep animations performant (prefer `transform` and `opacity`)
- **Dark Theme**: The application uses a dark-first design — ensure all new UI elements are legible on dark backgrounds

### JavaScript Guidelines

- **Modules**: Keep related functionality grouped within clearly commented sections of `app.js`
- **DOM Manipulation**: Use `document.querySelector` / `querySelectorAll`; avoid inline event handlers in HTML
- **Error Handling**: Wrap async operations and API calls in `try/catch` blocks
- **localStorage**: Use the existing persistence pattern for saving/loading user state
- **No External Dependencies**: Avoid adding new libraries unless absolutely necessary and discussed beforehand

### Example Function Structure

```javascript
/**
 * Calculates carbon savings for a given journey.
 * @param {string} mode - The transit mode (e.g., 'metro', 'bus', 'ebike').
 * @param {number} distanceKm - Journey distance in kilometers.
 * @returns {number} Carbon saved in grams of CO₂.
 */
function calculateCarbonSavings(mode, distanceKm) {
  const emissionFactors = {
    metro: 20,
    bus: 40,
    ebike: 5,
    car: 120,
  };

  const carEmissions = emissionFactors.car * distanceKm;
  const modeEmissions = (emissionFactors[mode] || 0) * distanceKm;

  return Math.max(0, carEmissions - modeEmissions);
}
```


## 🔧 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style and design patterns
- Include proper error handling
- Add comments for complex logic

### 3. Test Your Changes

- Test on different screen sizes (mobile, tablet, desktop)
- Test with different browsers (Chrome, Firefox, Edge, Safari)
- Ensure the Leaflet map renders correctly
- Verify localStorage persistence across page reloads
- Check the browser console for errors

### 4. Commit Your Changes
This project follows the **Conventional Commits** specification.

#### Commit Message Format

```
<type>: <subject>

[optional body]

[optional footer]
```

#### Available Types

| Type       | Description                                       |
|------------|---------------------------------------------------|
| `feat`     | New feature                                       |
| `fix`      | Bug fix                                           |
| `docs`     | Documentation changes                             |
| `style`    | Code style changes (formatting, semicolons, etc.) |
| `refactor` | Code refactoring (not a feature or fix)           |
| `test`     | Adding or updating tests                          |
| `build`    | Build system or external dependencies             |
| `ci`       | CI configuration changes                          |
| `chore`    | Other changes that don't modify src/test files    |
| `revert`   | Reverting a previous commit                       |

#### Commit Message Rules

- **Subject:**
  - Use imperative tense ("add" not "added")
  - No period at the end
  - Maximum 72 characters
  - Lowercase only

- **Type:**
  - Must be one of the types listed above
  - Lowercase only

#### Examples

```bash
# Valid commit messages
git commit -m "feat: add real-time TSRTC bus tracking layer"
git commit -m "fix: resolve map tile rendering on mobile Safari"
git commit -m "docs: update README with BLE radar instructions"
git commit -m "refactor: extract carbon calculation into utility"
git commit -m "style: align glassmorphic card padding"

# Invalid commit messages
git commit -m "added bus tracking"              # Missing type
git commit -m "feat: Added bus tracking"        # Subject should be imperative
git commit -m "feat: Add bus tracking."         # No period at the end
git commit -m "FEAT: add bus tracking"          # Type must be lowercase
```

```bash
git add .
git commit -m "feat: add new feature description"
```

### 5. Push and Create Merge Request

```bash
git push origin feature/your-feature-name
```


## 📋 Merge Request Guidelines

### Before Submitting

- **Code Review**: Review your own code
- **Testing**: Test all functionality across browsers and screen sizes
- **Console**: Ensure no JavaScript errors in the browser console
- **Build**: Ensure the static site loads correctly from a local server

### Merge Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in different browsers
- [ ] Map renders correctly
- [ ] localStorage persistence verified

## Screenshots (if applicable)

Add screenshots for UI changes

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] No console errors
- [ ] Glassmorphic design language maintained
```


## 🐛 Bug Reports
When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, device
- **Screenshots**: Visual evidence if applicable


## 💡 Feature Requests
When requesting features, please include:

- **Description**: Clear description of the feature
- **Use Case**: Why this feature is needed
- **Mockups**: Visual examples if applicable
- **Alternatives**: Any existing workarounds


## 🎯 Current Focus Areas

### High Priority

- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add comprehensive error handling for geolocation and BLE APIs
- [ ] Optimize Leaflet map performance with large route datasets
- [ ] Add unit tests for the routing engine and carbon calculator

### Medium Priority

- [ ] Enhance mobile experience and touch interactions
- [ ] Add loading states and skeleton screens
- [ ] Improve QR code generation quality and scanning reliability
- [ ] Add route history and favorites persistence

### Low Priority

- [ ] Add route transition animations
- [ ] Improve documentation with architecture diagrams
- [ ] Add more micro-mobility options (e-scooters, shared cabs)
- [ ] Internationalization (Telugu, Hindi, Urdu support)


## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow project conventions

### Communication

- Use clear, descriptive commit messages
- Provide context in merge requests
- Ask questions when unsure
- Share knowledge with the community


## 📚 Resources

### Documentation

- [Leaflet.js Documentation](https://leafletjs.com/reference.html)
- [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)

### Tools

- [CartoDB Basemaps](https://carto.com/basemaps/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)


## 🆘 Getting Help
If you need help:

1. **Check Documentation**: Review this file and the project README
2. **Search Issues**: Look for similar issues on GitLab
3. **Ask Questions**: Create an issue with the "question" label
4. **Join Discussions**: Participate in project discussions


## 📄 License
By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to HydraTransit! 🚇🎉
