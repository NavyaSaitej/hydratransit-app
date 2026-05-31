# Contributing to HydraTransit

Thank you for your interest in contributing to HydraTransit. This guide explains how to set up the project, make changes, test them, and submit clean contributions.

Website Link:- https://hydratransit-app.vercel.app

## Project Summary

HydraTransit is a static vanilla HTML/CSS/JavaScript application for Hyderabad transit planning and green mobility. It includes route planning, Google Maps visualization, HydraPass ticket generation, BLE-style coach crowding simulation, Eco Carbon Rewards, and browser state persistence.

## Getting Started

### Prerequisites

- Any modern browser: Chrome, Firefox, Edge, or Safari
- Git
- Optional: Python 3.x or Node.js for a local development server

### Clone the Repository

For the Swecha repository:

```bash
git clone https://code.swecha.org/Navya_sai_tej/hydratransit-app.git
cd hydratransit-app
```

For the GitHub repository:

```bash
git clone https://github.com/NavyaSaitej/hydratransit-app.git
cd hydratransit-app
```

No dependency installation is required. The app runs directly in the browser.

### Run Locally

Open `index.html` directly, or serve the project folder:

```bash
# Using Python 3.x
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

Then visit:

```text
http://localhost:8000
```

## Project Structure

```text
.
|-- app.js                    # Main app logic: routing, maps, wallet, QR, BLE
|-- index.html                # Static HTML entry point
|-- style.css                 # Global styles, responsive UI, animations
|-- state_checkpoint.json     # Project state and handoff metadata
|-- HydraTransit_Hackathon_Pitch.pptx
|-- AGENT.md                  # AI agent continuation guide
|-- CONTRIBUTING.md           # Contributor guide
|-- README.md                 # User-facing documentation
|-- .gitignore
`-- .gitlab-ci.yml
```

## Technologies Used

**HTML5:** Semantic markup and app structure.

**CSS3:** Glassmorphic styling, responsive layout, transitions, and animations.

**JavaScript (Vanilla):** Routing logic, interactivity, local state, and UI updates.

**Google Maps JavaScript API:** Map rendering, markers, route lines, Places Autocomplete, Directions, and Geocoding.

**HTML5 Canvas:** HydraPass QR-style visual generation.

**Web Bluetooth API:** BLE-style coach crowding simulation and fallback behavior.

**localStorage API:** Client-side persistence for wallet, points, route, and streak data.

## Contribution Workflow

1. Fork the repository.
2. Create a feature branch.
3. Make focused changes.
4. Test locally in the browser.
5. Commit using Conventional Commits.
6. Push your branch.
7. Open a Merge Request or Pull Request.

### Create a Branch

```bash
git checkout -b feature/my-feature
```

Use a short, descriptive branch name such as:

```text
feature/route-favorites
fix/mobile-pass-layout
docs/update-agent-guide
```

## Development Guidelines

**Keep the App Static:** Avoid adding a backend, bundler, or package dependency unless the change clearly requires it and has been discussed.

**Follow Existing Patterns:** Keep related JavaScript in the existing sections of `app.js`. Match current naming, state handling, and UI rendering style.

**Use Semantic HTML:** Keep markup readable and accessible. Prefer clear labels, useful `aria-*` attributes, and predictable tab order.

**Preserve the Visual System:** New UI should match the existing glassmorphic dark interface, spacing, colors, animations, and responsive behavior.

**Protect Browser State:** Changes touching wallet, rewards, route state, or localStorage should preserve existing user data whenever possible.

**Handle Failure States:** Map, geolocation, autocomplete, directions, BLE, and storage features should fail gracefully.

## Code Style

**JavaScript:**

- Use modern ES6+ syntax.
- Prefer `const` and `let`.
- Use `camelCase` for variables and functions.
- Keep functions focused and readable.
- Add short comments only for complex logic.

**CSS:**

- Use existing CSS variables and class naming patterns.
- Use responsive media queries for layout changes.
- Prefer performant animation properties such as `transform` and `opacity`.
- Test mobile, tablet, and desktop widths.

**HTML:**

- Use semantic elements where practical.
- Keep IDs and classes descriptive.
- Avoid adding unused markup.

## Commit Messages

Use Conventional Commits:

```text
<type>: <subject>
```

Common types:

```text
feat: add route favorites
fix: correct mobile pass overflow
docs: update setup instructions
style: refine rewards card spacing
refactor: simplify route sorting logic
chore: update ignored files
```

Rules:

- Use lowercase type names.
- Use imperative tense.
- Keep the subject concise.
- Do not end the subject with a period.

## Testing Checklist

Before opening a contribution, check:

- App loads without console errors.
- Map initializes and remains interactive.
- Origin and destination inputs work.
- Route cards render after search.
- Selecting a route updates the map and pass panel.
- HydraPass generation works.
- Eco points and reward redemption work.
- Data persists after reload.
- Layout works on mobile and desktop.
- No unrelated files are changed.

## Merge Request or Pull Request Template

```markdown
## Description

Briefly explain what changed and why.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactor

## Testing

- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Checked browser console
- [ ] Verified map behavior
- [ ] Verified localStorage behavior

## Notes

Add screenshots, tradeoffs, or follow-up work if relevant.
```

## Bug Reports

Include:

- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and operating system
- Screenshots or console errors, if available

## Feature Requests

Include:

- Feature summary
- User problem or use case
- Suggested interaction or UI behavior
- Any constraints or alternatives considered

## Current Focus Areas

**High Priority:**

- Improve accessibility and keyboard navigation.
- Add stronger error handling for Maps and BLE flows.
- Improve mobile route and pass interactions.
- Keep the live Vercel deployment and documentation in sync.

**Medium Priority:**

- Add route history and favorites.
- Improve loading and empty states.
- Expand micro-mobility options.
- Add more precise carbon savings calculations.

**Low Priority:**

- Add more language/localization coverage.
- Improve architecture diagrams.
- Add visual regression screenshots for UI changes.

## Community Guidelines

- Be respectful and constructive.
- Keep feedback specific and actionable.
- Ask questions when context is unclear.
- Prefer small, reviewable changes.
- Document behavior that future contributors need to understand.

## License

No license file is currently included in this repository. Do not assume an open-source license until one is added by the project owner.
